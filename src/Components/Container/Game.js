import * as React from "react";
import Caret from "../Caret";
import Paragraph from "../Paragraph";
import Statistics from "../Statistics";
import Footer from "../Footer";
import { VscDebugRestart } from "react-icons/vsc";

export default function Game() {
  const [time, setTime] = React.useState(0);
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [currentDomNode, setCurrentDomNode] = React.useState(null);

  const [gameSettings, setGameSettings] = React.useState({
    mode: "quote",
    quoteLength: "all",
    wordLength: 100,
    showWpm: true,
    letterProg: true,
    wordProg: true,
    showTime: false,
  });

  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  let intervalRef = React.useRef(null);

  async function getQuote() {
    const res = await fetch("https://api.quotable.io/random");
    const { content } = await res.json();
    setQuote(content);
  }

  React.useEffect(() => {
    inputRef?.current?.focus();
    getQuote();
  }, []);

  if (quote.length === 0) return null;

  function startTimer() {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    intervalRef.current = intervalId;
  }

  function playGame(e) {
    const { value } = e.target;
    if (input === "") {
      startTimer();
      setPlaying(true);
    }
    setInput(value);
    checkComplete();
  }

  const checkComplete = () => {
    // const data = sortData(input, quote);
    // if (data[0] === data[1]) {
    const newLength = input.length + 1;
    if (newLength === quote.length) {
      clearInterval(intervalRef.current);
      setPlaying(false);
    }
  };

  function restart() {
    setPlaying(false);
    clearInterval(intervalRef.current);
    setInput("");
    setTime(0);
    setCurrentDomNode(0);
    getQuote();
    inputRef?.current?.focus();
  }

  return (
    <>
      <div className="gameinfo">
        <Statistics
          gameSettings={gameSettings}
          input={input}
          quote={quote}
          time={time}
        />
      </div>
      <div className="quotewrapper">
        <Caret
          currentDomNode={currentDomNode}
          setCurrentDomNode={setCurrentDomNode}
          textRef={textRef}
          input={input}
          quote={quote}
        />
        <Paragraph
          currentDomNode={currentDomNode}
          setCurrentDomNode={setCurrentDomNode}
          input={input}
          quote={quote}
          textRef={textRef}
        />
      </div>
      <div className="reset">
        <button className="reset__btn" onClick={restart}>
          <VscDebugRestart />
        </button>
      </div>
      <input
        autoComplete="off"
        spellCheck="false"
        autoFocus
        ref={inputRef}
        className="input"
        type="text"
        value={input}
        onChange={(e) => playGame(e)}
      />
      <Footer gameSettings={gameSettings} setGameSettings={setGameSettings} />
    </>
  );
}

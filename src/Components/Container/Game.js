import * as React from "react";
import Caret from "../Caret";
import Paragraph from "../Paragraph";
import Statistics from "../Statistics";
import Footer from "../Footer";
import { VscDebugRestart } from "react-icons/vsc";
import Data from "../../Static/Words";

export default function Game() {
  const [time, setTime] = React.useState(0);
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [currentDomNode, setCurrentDomNode] = React.useState(null);

  const [gameSettings, setGameSettings] = React.useState({
    mode: "quote",
    quoteLength: "https://api.quotable.io/random?minLength=10&maxLength=500",
    wordLength: 25,
    showWpm: true,
    letterProg: false,
    wordProg: false,
    showTime: false,
  });

  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  let intervalRef = React.useRef(null);

  async function getQuote() {
    const res = await fetch(`${gameSettings.quoteLength}`);
    const { content } = await res.json();
    setQuote(content);
  }

  function getWords() {
    const shuffled = Data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, gameSettings.wordLength);
    const stringify = selected.join(" ");
    setQuote(stringify);
  }

  function startGame() {
    if (gameSettings.mode === "quote") {
      getQuote();
    } else if (gameSettings.mode === "words") {
      getWords();
    }
  }

  React.useEffect(() => {
    restart();
  }, [gameSettings.mode, gameSettings.quoteLength, gameSettings.wordLength]);

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
    setTime(0);
    setCurrentDomNode(0);
    setInput("");
    startGame();
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

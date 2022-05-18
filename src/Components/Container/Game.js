import Caret from "../Caret";
import Header from "../Header";
import Footer from "../Footer";
import * as React from "react";
import Paragraph from "../Paragraph";
import Statistics from "../Statistics";
import { VscDebugRestart } from "react-icons/vsc";
import { FaMousePointer } from "react-icons/fa";
import useLocalstorage from "../../Hooks/useLocalstorage";
import {
  playSound,
  getQuote,
  getWords,
  INITIAL_STATE,
} from "../../Static/Utils";
import { sleep } from "../../Static/Utils";

export default function Game() {
  const [time, setTime] = React.useState(0);
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [currentDomNode, setCurrentDomNode] = React.useState(null);
  const [gameSettings, setGameSettings] = useLocalstorage(
    "game_state",
    INITIAL_STATE
  );
  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  const opacRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const tabRef = React.useRef(null);
  const focusRef = React.useRef(null);
  const caretRef = React.useRef(null);

  React.useEffect(() => {
    restart();
  }, [gameSettings.mode, gameSettings.quoteLength, gameSettings.wordLength]);

  const onTab = (event) => {
    if (event.key.toLowerCase() === "tab") {
      event.preventDefault();
      tabRef?.current?.focus();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [onTab]);

  if (quote.length === 0) return null;

  async function startGame() {
    if (gameSettings.mode === "quote")
      setQuote(await getQuote(gameSettings.quoteLength));
    else if (gameSettings.mode === "words")
      setQuote(await getWords(gameSettings.wordLength));
  }

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
    if (gameSettings.audio) playSound();
  }

  function playGame(e) {
    const { value } = e.target;
    if (input === "") {
      startTimer();
      setPlaying(true);
    }

    setInput(value);
    checkComplete();
    if (gameSettings.audio) playSound();
  }

  const checkComplete = () => {
    const newLength = input.length + 1;
    if (newLength === quote.length) {
      clearInterval(intervalRef.current);
      setPlaying(false);
    }
  };

  async function restart() {
    setPlaying(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setCurrentDomNode(0);
    setInput("");
    startGame();
    if (opacRef.current !== null) {
      opacRef.current.style = `opacity:0;`;
      await sleep(350);
      opacRef.current.style = `opacity:1;`;
    }
    onFocusGain();
  }

  function onFocusfall() {
    textRef.current.classList.add("inactive");
    focusRef.current.classList.add("active");
  }

  function onFocusGain() {
    if (inputRef.current !== null) {
      inputRef?.current?.focus();
      textRef.current.classList.remove("inactive");
      focusRef.current.classList.remove("active");
    }
  }

  return (
    <>
      {/* <Header playing={playing} /> */}
      <div className="opac" ref={opacRef}>
        <div className="gameinfo">
          <Statistics
            gameSettings={gameSettings}
            input={input}
            quote={quote}
            time={time}
          />
        </div>

        <div
          className="quotewrapper"
          onClick={() => inputRef?.current?.focus()}
        >
          <Caret
            currentDomNode={currentDomNode}
            setCurrentDomNode={setCurrentDomNode}
            textRef={textRef}
            input={input}
            quote={quote}
            gameSettings={gameSettings}
            caretRef={caretRef}
          />
          <Paragraph
            currentDomNode={currentDomNode}
            setCurrentDomNode={setCurrentDomNode}
            input={input}
            quote={quote}
            textRef={textRef}
          />

          <div className="focus" ref={focusRef}>
            <FaMousePointer style={{ marginRight: "0.3rem" }} /> Click here to
            start typing again.
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
            onBlur={onFocusfall}
            onFocus={onFocusGain}
          />
        </div>
      </div>
      <div className="reset">
        <button className="reset__btn" onClick={restart} ref={tabRef}>
          <VscDebugRestart size={22} />
        </button>
      </div>

      <Footer
        gameSettings={gameSettings}
        setGameSettings={setGameSettings}
        playing={playing}
      />
    </>
  );
}

import * as React from "react";
import Caret from "../Caret";
import Paragraph from "../Paragraph";
import Statistics from "../Statistics";
import Footer from "../Footer";
import { VscDebugRestart } from "react-icons/vsc";
import Data from "../../Static/Words";
import useLocalstorage from "../../Hooks/useLocalstorage";

import {
  playSound,
  getQuote,
  getWords,
  INITIAL_STATE,
} from "../../Static/Utils";

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
  const intervalRef = React.useRef(null);

  React.useEffect(() => {
    restart();
  }, [gameSettings.mode, gameSettings.quoteLength, gameSettings.wordLength]);

  const restartKeybind = (event) => {
    if (event.key.toLowerCase() === "enter" && event.ctrlKey) {
      restart();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", restartKeybind);
    return () => {
      document.removeEventListener("keydown", restartKeybind);
    };
  }, [restartKeybind]);

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

  const checkComplete = () => {
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

  const onFocusFall = () => inputRef?.current?.focus();

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
          <VscDebugRestart size={22} />
        </button>
      </div>
      <input
        onBlur={onFocusFall}
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

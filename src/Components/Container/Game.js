import Caret from "../Caret";
import Header from "../Header";
import Footer from "../Footer";
import * as React from "react";
import Paragraph from "../Paragraph";
import Statistics from "../Statistics";
import { VscDebugRestart } from "react-icons/vsc";
import { FaMousePointer } from "react-icons/fa";
import useLocalstorage from "../../Hooks/useLocalstorage";
import { playSound, getQuote, getWords, INITIAL_STATE } from "../../Static/Utils";
import { sleep } from "../../Static/Utils";
import NewCaret from "../NewCaret";

export default function Game() {
  const [time, setTime] = React.useState(0);
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const [playing, setPlaying] = React.useState(false);
  const [currentDomNode, setCurrentDomNode] = React.useState(null);
  const [gameSettings, setGameSettings] = useLocalstorage("game_state", INITIAL_STATE);
  const inputRef = React.useRef(null);
  const intervalRef = React.useRef(null);
  const textRef = React.useRef(null);
  const opacRef = React.useRef(null);
  const tabRef = React.useRef(null);
  const focusRef = React.useRef(null);

  const [arr, setArr] = React.useState([]);
  const [arrInput, setArrInput] = React.useState("");
  const [activeWord, setActiveWord] = React.useState(0);
  const [activeLetter, setActiveLetter] = React.useState(0);

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
    if (gameSettings.mode === "quote") setQuote(await getQuote(gameSettings.quoteLength));
    else if (gameSettings.mode === "words") setQuote(await getWords(gameSettings.wordLength));
  }

  function startTimer() {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    intervalRef.current = intervalId;
  }

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

  const checkComplete = () => {
    if ("" === quote.split(" ").length) {
      clearInterval(intervalRef.current);
      setPlaying(false);
    }
  };

  function playGame(e) {
    if (playing === false) {
      startTimer();
      setPlaying(true);
    }
    handleChange(e);
    if (gameSettings.audio) playSound();
  }

  function handleChange(e) {
    const { value } = e.target;
    const inputSplit = value.split("");
    setArrInput(value);
    setActiveLetter(value.length);

    if (arr.length === quote.split(" ").length - 1) {
      const lastWord = quote.split(" ").at(-1);
      if (value === lastWord) {
        setArr((_) => [..._, value]);
      }
    }
    if (inputSplit.at(-1) === " ") {
      setArr((_) => [..._, value.replace(/\s/g, "")]);
      setArrInput("");
      setActiveWord((_) => _ + 1);
      setActiveLetter(0);
    }
    checkComplete();
  }

  return (
    <>
      {/* <Header playing={playing} /> */}
      <div className="opac" ref={opacRef}>
        <button
          onClick={() => {
            console.log(arr);
          }}
        >
          ARRAY LOGGER
        </button>

        <Statistics gameSettings={gameSettings} input={input} quote={quote} time={time} />
        <div className="quotewrapper" onClick={() => inputRef?.current?.focus()}>
          <NewCaret
            textRef={textRef}
            input={arrInput}
            arr={arr}
            quote={quote}
            gameSettings={gameSettings}
            activeLetter={activeLetter}
            activeWord={activeWord}
          />
          <div className="para" ref={textRef}>
            {quote.split(" ").map((word, index) => {
              // const everyWord = arr.join(" ").toString() || arrInput;
              const wordex = index;
              const arrActive = index <= arr.length;
              const typeActive = index === activeWord;
              const correct =
                arrActive &&
                word
                  .split("")
                  .map((letter, index) => arr[wordex]?.split("")[index] === letter || (arrInput.split("")[index] === letter && typeActive));
              return (
                <div key={index} className="text">
                  {word.split("").map((letter, index) => {
                    const isCorr = correct[index];
                    return (
                      <span
                        key={index}
                        className={`${wordex < arr.length ? (isCorr ? "correct" : "incorrect underline") : ""} ${
                          index < arrInput.length && activeWord === wordex ? (letter === arrInput[index] ? "correct" : "incorrect") : ""
                        }`}
                      >
                        {letter}
                      </span>
                    );
                  })}
                  {wordex !== quote.split(" ").length - 1 && <span className="span"> </span>}
                </div>
              );
            })}
          </div>

          <div className="focus" ref={focusRef}>
            <FaMousePointer style={{ marginRight: "0.3rem" }} /> Click here to start typing again.
          </div>
          <input
            autoComplete="off"
            spellCheck="false"
            autoFocus
            ref={inputRef}
            className="input"
            type="text"
            value={arrInput}
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

      <Footer gameSettings={gameSettings} setGameSettings={setGameSettings} playing={playing} />
    </>
  );
}

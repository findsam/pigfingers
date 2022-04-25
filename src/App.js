import * as React from "react";
import "./App.css";

function captureCaret(
  letterIndex,
  wordIndex,
  letter,
  word,
  activeLetter,
  quote,
  input
) {
  // let letterToStyle = quote.split("")[letterIndex];
  const indexs = quote.split("").map((_, index) => index);
  consonle.log(indexs);
}

function RenderQuote(props) {
  const input = props.input.split("");
  const wordsBySpace = props.quote.split(" ");
  const activeLetter = input.length;

  return (
    <div className="quotewrapper">
      <>
        {wordsBySpace.map((word, index) => {
          const active = props.input.split(" ").length - 1 === index;
          const wordIndex = index;
          return (
            <div className={`${active && "active"}`} key={index}>
              {word.split("").map((letter, index) => {
                captureCaret(
                  index,
                  wordIndex,
                  letter,
                  word,
                  activeLetter,
                  props.quote,
                  props.input
                );
                return <span key={index}>{letter}</span>;
              })}
            </div>
          );
        })}
      </>
    </div>
  );
}

export default function App() {
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);

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

  return (
    <div className="App">
      <div className="wrapper">
        <RenderQuote input={input} quote={quote} />

        <input
          autoComplete="off"
          spellCheck="false"
          autoFocus
          ref={inputRef}
          className="input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

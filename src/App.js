import * as React from "react";
import "./App.css";

function RenderQuote({ input, quote }) {
  const inputSplit = input.split("");
  const quoteSplit = quote.split(" ");

  const currWord = input.split(" ").length - 1;

  return (
    <div className="quotewrapper">
      {quoteSplit.map((word, index) => {
        return (
          <div
            key={index}
            className={`word ${currWord === index ? "active" : ""}`}
          >
            {word.split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        );
      })}
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

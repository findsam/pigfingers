import * as React from "react";
import "./App.css";

function RenderQuote(props) {
  const inputBySpace = props.input.split(" ");
  const wordsBySpace = props.quote.split(" ");

  return (
    <div className="quotewrapper">
      {props.input}
      <br />
      <br />
      <>
        {props.quote.split("").map((letter, index) => {
          const active = props.input.split("").length === index;

          return (
            <span
              key={index}
              className={`letter ${active && "active"} ${
                index < props.input.length
                  ? letter === props.input[index]
                    ? "correct"
                    : "incorrect"
                  : null
              }`}
            >
              {letter}
            </span>
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

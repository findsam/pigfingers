import * as React from "react";
import "./App.css";
import Caret from "./Caret";

function RenderQuote(props) {
  const inputBySpace = props.input.split(" ");
  const wordsBySpace = props.quote.split(" ");

  // React.useEffect(() => {
  //   console.log(props?.textRef?.current?.childNodes?.length);
  // }, [props.textRef]);

  return (
    <div className="paragraph" ref={props.textRef}>
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
                : ""
            }`}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

export default function App() {
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const [activeCaret, setActiveCaret] = React.useState(0);

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
      {input}
      <div className="wrapper">
        <div className="quotewrapper" ref={wrapperRef}>
          <Caret
            activeCaret={activeCaret}
            setActiveCaret={setActiveCaret}
            length={input.length}
            textRef={textRef}
            wrapperRef={wrapperRef}
            input={input}
          />
          <RenderQuote input={input} quote={quote} textRef={textRef} />
        </div>
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

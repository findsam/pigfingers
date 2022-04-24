import * as React from "react";
import "./App.css";

function RenderQuote(props) {
  const input = props.input.split("");
  const quote = props.quote.split("");
  return (
    <div className="quotewrapper">
      {quote.map((item, index) => {
        let color;
        let active;

        if (index === input.length) {
          active = index;
        }

        if (index < input.length) {
          color = item === input[index] ? "#ebdbb2" : "#fb4934";
        }

        return (
          <span
            style={{ color: color }}
            key={index}
            className={`${active === index && "active"} text__item`}
          >
            {item}
            {active === index && <span className="caret" />}
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

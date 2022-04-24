import * as React from "react";
import "./App.css";

function RenderQuote({ input, quote }) {
  const [active, setActive] = React.useState();
  // console.log(active);
  return (
    <div>
      {quote.map((item, index) => {
        let color;
        if (index < input.length) {
          color = item === input[index] ? "#99cc00" : "#ff2b33";
        }
        return (
          <span style={{ color: color }} key={index}>
            {item}
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

  if (quote.length === 0) return null; // small error handler.

  return (
    <div className="App">
      <div className="wrapper">
        <RenderQuote input={input.split("")} quote={quote.split("")} />
        <br /> <br />
        <input
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

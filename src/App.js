import * as React from "react";
import "./App.css";
import Caret from "./Components/Caret";
import Paragraph from "./Components/Paragraph";

export default function App() {
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const [currentDomNode, setCurrentDomNode] = React.useState(null);

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
        <div className="quotewrapper" ref={wrapperRef}>
          <Caret
            currentDomNode={currentDomNode}
            setCurrentDomNode={setCurrentDomNode}
            textRef={textRef}
            input={input}
          />
          <Paragraph
            currentDomNode={currentDomNode}
            setCurrentDomNode={setCurrentDomNode}
            input={input}
            quote={quote}
            textRef={textRef}
          />
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

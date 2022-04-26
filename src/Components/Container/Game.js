import * as React from "react";
import Caret from "../Caret";
import Paragraph from "../Paragraph";

export default function Game() {
  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);
  const [quote, setQuote] = React.useState("");
  const [input, setInput] = React.useState("");
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
    <>
      <div className="quotewrapper">
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
    </>
  );
}

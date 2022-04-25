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
  // const mainLetter = quote.split("")[activeLetter];
  // console.log(input.split("").at(-1) === quote.split("")[activeLetter - 1]);
  const indexs = quote.split("").map((_, index) => index);
  const activeIndex = indexs.findIndex((index) => index === activeLetter);
  const activeIndexLetter = quote.split("")[activeIndex - 1];

  return { activeIndex, activeIndexLetter };
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
                const { activeIndex, activeIndexLetter } = captureCaret(
                  index,
                  wordIndex,
                  letter,
                  word,
                  activeLetter,
                  props.quote,
                  props.input
                );

                // console.log(activeIndex === activeLetter);

                return (
                  <span
                    key={index}
                    className={`${
                      activeIndex === activeLetter &&
                      letter === activeIndexLetter &&
                      wordIndex === index &&
                      "active-letter"
                    }`}
                  >
                    {letter}
                  </span>
                );
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
    // const res = await fetch("https://api.quotable.io/random");
    // const { content } = await res.json();
    // setQuote(content);
    setQuote("Bascially the best.");
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

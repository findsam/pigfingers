import * as React from "react";
import "./App.css";

function captureCaret(
  letterIndex,
  wordIndex,
  letter,
  word,
  activeLetter,
  activeWord,
  quote,
  input
) {
  // const mainLetter = quote.split("")[activeLetter];
  // console.log(input.split("").at(-1) === quote.split("")[activeLetter - 1]);
  const indexs = quote.split("").map((_, index) => index);
  const activeIndex = indexs.findIndex((index) => index === activeLetter);
  const activeIndexLetter = quote.split("")[activeIndex - 1];

  const indexedWords = quote.split(" ").map((_, index) => index);
  const activeWordIndex = indexedWords.findIndex(
    (index) => index === wordIndex
  );
  const activeIndexWord = quote.split(" ")[activeWordIndex];

  console.log(activeIndexWord);

  const currentTargetIndex = null;

  return { activeIndex, activeIndexLetter, currentTargetIndex };
}

function RenderQuote(props) {
  const input = props.input.split("");
  const wordsBySpace = props.quote.split(" ");
  const activeLetter = input.length;

  return (
    <div className="quotewrapper">
      <>
        {wordsBySpace.map((word, index) => {
          const activeWord = props.input.split(" ").length - 1 === index;
          const activeWordIndex = props.input.split(" ").length;

          const wordIndex = index;
          return (
            <div className={`${activeWord && "active"}`} key={index}>
              {word.split("").map((letter, index) => {
                const { activeIndex, activeIndexLetter, currentTargetIndex } =
                  captureCaret(
                    index,
                    wordIndex,
                    letter,
                    word,
                    activeLetter,
                    activeWordIndex,
                    props.quote,
                    props.input
                  );

                return (
                  <span
                    key={index}
                    className={`${
                      activeIndex === activeLetter &&
                      letter === activeIndexLetter &&
                      currentTargetIndex === index &&
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

import { calcCorrectSymbols, calcWPM } from "../Static/Utils";

export default function Statistics(props) {
  function calcSpeed() {
    const correctSymbols = calcCorrectSymbols(props.input, props.quote);
    const finalWPM = calcWPM(correctSymbols, 15);
    return finalWPM;
  }

  return (
    <div className="statitstics">
      <p>
        letters: {props.input.split("").length}/{props.quote.split("").length}
      </p>
      <p>
        words: {props.input === "" ? 0 : props.input.split(" ").length}/
        {props.quote.split(" ").length}
      </p>
      <p>wpm: {calcSpeed()}</p>
    </div>
  );
}

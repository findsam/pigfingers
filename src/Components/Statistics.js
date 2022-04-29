import { calcCorrectSymbols, calcWPM } from "../Static/Utils";

export default function Statistics(props) {
  function calcSpeed() {
    const correctSymbols = calcCorrectSymbols(props.input, props.quote);
    const finalWPM = calcWPM(correctSymbols, props.time);
    return finalWPM;
  }

  return (
    <div className="statitstics">
      {props?.gameSettings?.letterProg && (
        <p>
          letters: {props?.input?.split("").length}/
          {props?.quote.split("").length}
        </p>
      )}
      {props?.gameSettings.wordProg && (
        <p>
          words: {props.input === "" ? 0 : props?.input.split(" ").length}/
          {props?.quote.split(" ").length}
        </p>
      )}
      {props?.gameSettings.showWpm && <p>wpm: {calcSpeed()}</p>}
      {props?.gameSettings.showTime && <p>time: {props?.time}</p>}
    </div>
  );
}

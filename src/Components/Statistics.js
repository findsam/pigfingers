import { calcCorrectSymbols, calcWPM, sleep, calcSpeed } from "../Static/Utils";

export default function Statistics(props) {
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
      {props?.gameSettings.showWpm && (
        <p>wpm: {calcSpeed(props?.input, props?.quote, props?.time)}</p>
      )}
      {props?.gameSettings.showTime && <p>time: {props?.time}</p>}
    </div>
  );
}

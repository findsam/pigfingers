export default function Statistics(props) {
  return (
    <div className="statitstics">
      <p>
        letters: {props.input.split("").length}/{props.quote.split("").length}
      </p>
      <p>
        words:
        {props.input === "" ? 0 : props.input.split(" ").length}/
        {props.quote.split(" ").length}
      </p>
      <p>wpm: 0</p>
    </div>
  );
}

import * as React from "react";

export default function Caret(props) {
  const { caretType } = props?.gameSettings;
  const [position, setPosition] = React.useState(null);
  const [windowResizing, setWindowResizing] = React.useState(false);
  let timerRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      clearTimeout(timerRef);
      setWindowResizing(true);
      timerRef = setTimeout(() => {
        setWindowResizing(false);
      }, 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setPosition(props?.textRef?.current?.childNodes[props.activeWord]?.childNodes[props.activeLetter]?.getBoundingClientRect());
  }, [props.textRef, props.quote, props.activeWord, props.activeLetter, windowResizing]);

  if (windowResizing) return null;

  switch (caretType) {
    case "stroke":
      return (
        <div className="caret-container">
          <div
            className={`caret stroke`}
            style={{
              top: `${position?.top}px`,
              left: `${position?.left}px`,
              width: `${position?.width}px`,
            }}
          />
        </div>
      );
    case "underline":
      return (
        <div className="caret-container">
          <div
            className={`caret`}
            style={{
              top: `${position?.top + 26}px`,
              left: `${position?.left}px`,
              // width: `${position?.width}px`,
            }}
          />
        </div>
      );
    default:
      return null;
  }
}

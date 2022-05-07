import * as React from "react";

export default function Caret(props) {
  const [position, setPosition] = React.useState(null);
  const { caretType } = props?.gameSettings;
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
    setPosition(
      props?.textRef?.current?.childNodes[
        props?.currentDomNode
      ]?.getBoundingClientRect()
    );
  }, [props.textRef, props.currentDomNode, props.quote, windowResizing]);

  if (windowResizing) return null;

  switch (caretType) {
    case "stroke":
      return (
        <div className="caret-container">
          <div
            className={`caret stroke ${props?.input?.length === 0 && "blink"}`}
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
            className={`caret  ${props?.input?.length === 0 && "blink"}`}
            style={{
              top: `${position?.top + 24}px`,
              left: `${position?.left}px`,
            }}
          />
        </div>
      );
    default:
      return null;
  }
}

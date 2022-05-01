import * as React from "react";

export default function Caret(props) {
  const [position, setPosition] = React.useState(null);
  const { caretType } = props?.gameSettings;

  React.useEffect(() => {
    setPosition(
      props?.textRef?.current?.childNodes[
        props?.currentDomNode
      ]?.getBoundingClientRect()
    );
  }, [props.textRef, props.currentDomNode, props.quote]);

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
              top: `${position?.top + 27}px`,
              left: `${position?.left}px`,
            }}
          />
        </div>
      );
    default:
      return null;
  }
}

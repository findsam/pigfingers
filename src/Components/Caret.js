import * as React from "react";

export default function Caret(props) {
  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    setPosition(
      props?.textRef?.current?.childNodes[
        props?.currentDomNode
      ]?.getBoundingClientRect()
    );
  }, [props.textRef, props.currentDomNode, props.quote]);

  return (
    <div className="caret-container">
      <div
        className="caret"
        style={{ top: `${position?.top + 27}px`, left: `${position?.left}px` }}
      />
    </div>
  );
}

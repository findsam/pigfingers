import * as React from "react";

export default function Caret(props) {
  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    // console.log(props?.textRef?.current?.childNodes.length);
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
        style={{ top: `${position?.top + 30}px`, left: `${position?.left}px` }}
      />
    </div>
  );
}

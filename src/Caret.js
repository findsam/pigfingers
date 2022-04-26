import * as React from "react";

export default function Caret(props) {
  const [dimensions, setDimensions] = React.useState(null);
  const [textDimensions, setTextDimensions] = React.useState(null);

  const [position, setPosition] = React.useState(null);

  React.useEffect(() => {
    // console.log(
    //   props?.textRef?.current?.childNodes[
    //     props?.currentDomNode
    //   ]?.getBoundingClientRect()
    // );
    setPosition(
      props?.textRef?.current?.childNodes[
        props?.currentDomNode
      ]?.getBoundingClientRect()
    );
  }, [props.textRef, props.currentDomNode]);

  return (
    <div className="caret-container">
      <div
        className="caret"
        style={{ top: `${position?.top + 28}px`, left: `${position?.left}px` }}
      />
    </div>
  );
}

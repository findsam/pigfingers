import * as React from "react";

function calculatePixels(width) {
  return null;
}

export default function Caret(props) {
  const [dimensions, setDimensions] = React.useState(null);
  const [textDimensions, setTextDimensions] = React.useState(null);

  React.useEffect(() => {
    console.log(props?.textRef?.current?.childNodes?.length);
  }, [props.textRef]);

  React.useEffect(() => {
    setDimensions({
      width: props?.wrapperRef.current.clientWidth,
      height: props?.wrapperRef.current.clientHeight,
    });

    setTextDimensions({
      width: props?.textRef.current.clientWidth,
      height: props?.textRef.current.clientHeight,
    });
  }, [props.wrapperRef, props.textRef]);

  React.useEffect(() => {
    props.setActiveCaret((prev) => prev + 1);
  }, [props?.input?.length]);

  return (
    <div
      className="caret-container"
      style={{ height: dimensions?.height, width: textDimensions?.width }}
    >
      <div className="caret" style={{ left: `` }} />
    </div>
  );
}

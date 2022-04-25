import * as React from "react";
export default function Caret(props) {
  const [dimensions, setDimensions] = React.useState(null);

  React.useEffect(() => {
    console.log(props?.textRef?.current?.childNodes?.length);
  }, [props.textRef]);

  React.useEffect(() => {
    setDimensions({
      width: props?.wrapperRef.current.clientWidth,
      height: props?.wrapperRef.current.clientHeight,
    });
  }, [props.wrapperRef]);

  // console.log(count);

  console.log(dimensions);

  return (
    <div
      className="caret-container"
      style={{ height: dimensions?.height, width: dimensions?.width }}
    >
      <span className="caret"></span>
    </div>
  );
}

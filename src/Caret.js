import * as React from "react";
export default function Caret(props) {
  const [count, setCount] = React.useState(0);
  const moveDistance = count + 20;

  React.useEffect(() => {
    setCount((pc) => pc + 1);
  }, [props]);

  console.log(count);
  return <div className="caret" style={{ left: `${moveDistance}px` }}></div>;
}

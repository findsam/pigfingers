import * as React from "react";
export default function Paragraph(props) {
  return (
    <div className="paragraph" ref={props.textRef}>
      {props.quote.split("").map((letter, index) => {
        const active = props.input.split("").length === index;
        if (active) props.setCurrentDomNode(index);
        return (
          <span
            key={index}
            className={`letter ${active && "active"} ${
              index < props.input.length ? (letter === props.input[index] ? "correct" : "incorrect") : ""
            }`}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}

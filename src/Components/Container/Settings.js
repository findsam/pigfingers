import React from "react";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdQuote } from "react-icons/io";
import { FaClock } from "react-icons/fa";

export default function Settings() {
  const [open, setOpen] = React.useState();

  const close = React.useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen((po) => !po);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [close]);
  return (
    open && (
      <div className="settings">
        <div className="settings__inner">
          <h1>
            <RiSettings4Line /> Settings
          </h1>
          <ul>
            <li>
              <IoMdQuote /> Quote length...
            </li>
            <li>
              <FaClock /> Time...
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

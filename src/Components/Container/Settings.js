import React from "react";
import { RiSettings4Line } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { SiLetterboxd } from "react-icons/si";
import { IoMdQuote } from "react-icons/io";
import { FaClock, FaTachometerAlt, FaBars } from "react-icons/fa";

export default function Settings() {
  const [open, setOpen] = React.useState();

  const close = React.useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen((prevOpen) => !prevOpen);
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
          <ul>
            <li>
              <FaBars /> Mode...
            </li>
            <li>
              <IoMdQuote /> Quote length...
            </li>
            <li>
              <SiLetterboxd /> Words...
            </li>
            <li>
              <FaClock /> Time...
            </li>
            <li>
              <FaClock /> Time/Progress...
            </li>
            <li>
              <FaTachometerAlt /> Live WPM...
            </li>
            <li>
              <AiFillInfoCircle /> Creator...
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

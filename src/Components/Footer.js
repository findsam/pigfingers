import * as React from "react";
import Settings from "./Container/Settings";
import { FaCodeBranch } from "react-icons/fa";

export default function Footer(props) {
  return (
    <>
      <Settings
        gameSettings={props.gameSettings}
        setGameSettings={props.setGameSettings}
      />
      <footer className={`footer ${props.playing && "close"}`}>
        <div className="footer__commands">
          <p className="footer__commands--item">
            <span>esc/escape</span> - command line
          </p>
          <p className="footer__commands--item">
            <span>tab</span>and<span>enter</span> / <span>space</span>- restart
            game
          </p>
          <p className="footer__commands--item">
            <FaCodeBranch style={{ marginRight: "0.5rem" }} /> v1.0.0
          </p>
        </div>
      </footer>
    </>
  );
}

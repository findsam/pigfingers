import * as React from "react";
import Settings from "./Container/Settings";
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
            <span>ctrl/cmd</span>+<span>enter</span> - restart game
          </p>
        </div>
      </footer>
    </>
  );
}

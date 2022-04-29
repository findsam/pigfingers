import * as React from "react";
import Settings from "./Container/Settings";
export default function Footer(props) {
  return (
    <>
      <Settings
        gameSettings={props.gameSettings}
        setGameSettings={props.setGameSettings}
      />
      <footer className="footer">
        <div className="footer__commands">
          <p className="footer__commands--item">
            <span>tab</span> - restart game
          </p>
          <p className="footer__commands--item">
            <span>esc/escape</span> - command line
          </p>
        </div>
      </footer>
    </>
  );
}

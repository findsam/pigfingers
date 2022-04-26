import * as React from "react";
import Settings from "./Container/Settings";
export default function Footer() {
  return (
    <>
      <Settings />
      <footer className="footer">
        <div className="footer__commands">
          <p className="footer__commands--item">
            <span>esc/escape</span> - command line
          </p>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import { IoMdQuote } from "react-icons/io";
import { SiLetterboxd } from "react-icons/si";
import { AiFillSound } from "react-icons/ai";
import { BiItalic } from "react-icons/bi";
import {
  FaClock,
  FaTachometerAlt,
  FaBars,
  FaDonate,
  FaCog,
} from "react-icons/fa";
import { sleep } from "../../Static/Utils";
import { FaTwitter, FaGithub, FaHeart } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { INITIAL_STATE } from "../../Static/Utils";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Settings(props) {
  const [open, setOpen] = React.useState(false);
  const settingsRef = React.useRef(null);

  const close = React.useCallback((event) => {
    if (event.keyCode === 27) {
      setOpen(async (prevOpen) => {
        if (prevOpen === true) {
          settingsRef.current.childNodes[0].style = `transform: translateY(-35px)!important`;
          settingsRef.current.style = `opacity:0;`;
          await sleep(400);
          setOpen(false);
        } else if (prevOpen === false) {
          setOpen(true);
        }
      });
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
      <div className={`settings`} ref={settingsRef}>
        <div className="settings__inner">
          <ul>
            <li>
              <span>
                <FaBars /> mode:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.mode === "quote" && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      mode: "quote",
                    }))
                  }
                >
                  quote
                </p>
                <p
                  className={`${props.gameSettings.mode === "words" && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      mode: "words",
                    }))
                  }
                >
                  words
                </p>
              </div>
            </li>
            {props.gameSettings.mode === "words" && (
              <>
                <li>
                  <span>
                    <IoMdQuote /> word length:
                  </span>
                  <div>
                    <p
                      className={`${
                        props.gameSettings.wordLength === 15 && "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          wordLength: 15,
                        }))
                      }
                    >
                      25
                    </p>
                    <p
                      className={`${
                        props.gameSettings.wordLength === 30 && "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          wordLength: 30,
                        }))
                      }
                    >
                      50
                    </p>
                    <p
                      className={`${
                        props.gameSettings.wordLength === 60 && "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          wordLength: 60,
                        }))
                      }
                    >
                      60
                    </p>
                  </div>
                </li>
              </>
            )}
            {props.gameSettings.mode === "quote" && (
              <>
                <li>
                  <span>
                    <IoMdQuote /> quote length:
                  </span>
                  <div>
                    <p
                      className={`${
                        props.gameSettings.quoteLength ===
                          "https://api.quotable.io/random?minLength=10&maxLength=500" &&
                        "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          quoteLength:
                            "https://api.quotable.io/random?minLength=10&maxLength=500",
                        }))
                      }
                    >
                      all
                    </p>
                    <p
                      className={`${
                        props.gameSettings.quoteLength ===
                          "https://api.quotable.io/random?minLength=10&maxLength=150" &&
                        "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          quoteLength:
                            "https://api.quotable.io/random?minLength=10&maxLength=150",
                        }))
                      }
                    >
                      small
                    </p>
                    <p
                      className={`${
                        props.gameSettings.quoteLength ===
                          "https://api.quotable.io/random?minLength=150&maxLength=300" &&
                        "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          quoteLength:
                            "https://api.quotable.io/random?minLength=150&maxLength=300",
                        }))
                      }
                    >
                      medium
                    </p>
                    <p
                      className={`${
                        props.gameSettings.quoteLength ===
                          "https://api.quotable.io/random?minLength=300&maxLength=500" &&
                        "set"
                      }`}
                      onClick={() =>
                        props.setGameSettings((prevSettings) => ({
                          ...prevSettings,
                          quoteLength:
                            "https://api.quotable.io/random?minLength=300&maxLength=500",
                        }))
                      }
                    >
                      long
                    </p>
                  </div>
                </li>
              </>
            )}

            <li>
              <span>
                <BiItalic size={15} /> caret:
              </span>
              <div>
                <p
                  className={`${
                    props.gameSettings.caretType === "underline" && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      caretType: "underline",
                    }))
                  }
                >
                  underline
                </p>
                <p
                  className={`${
                    props.gameSettings.caretType === "stroke" && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      caretType: "stroke",
                    }))
                  }
                >
                  block
                </p>

                <p
                  className={`${
                    props.gameSettings.caretType === "default" && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      caretType: "default",
                    }))
                  }
                >
                  off
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaTachometerAlt /> show wpm:
              </span>
              <div>
                <label className="checkboxcontainer">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={props.gameSettings.showWpm}
                    readOnly
                  />
                  <span
                    className="slider"
                    onClick={() =>
                      props.setGameSettings((prevSettings) => ({
                        ...prevSettings,
                        showWpm: !prevSettings.showWpm,
                      }))
                    }
                  ></span>
                </label>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> letter progress:
              </span>
              <div>
                <label className="checkboxcontainer">
                  <input
                    className="checkbox"
                    type="checkbox"
                    readOnly
                    checked={props.gameSettings.letterProg}
                  />
                  <span
                    className="slider"
                    onClick={() =>
                      props.setGameSettings((prevSettings) => ({
                        ...prevSettings,
                        letterProg: !prevSettings.letterProg,
                      }))
                    }
                  ></span>
                </label>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> word progress:
              </span>
              <div>
                <label className="checkboxcontainer">
                  <input
                    className="checkbox"
                    readOnly
                    type="checkbox"
                    checked={props.gameSettings.wordProg}
                  />
                  <span
                    className="slider"
                    onClick={() =>
                      props.setGameSettings((prevSettings) => ({
                        ...prevSettings,
                        wordProg: !prevSettings.wordProg,
                      }))
                    }
                  ></span>
                </label>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> show time:
              </span>
              <div>
                <label className="checkboxcontainer">
                  <input
                    readOnly
                    className="checkbox"
                    type="checkbox"
                    checked={props.gameSettings.showTime}
                  />
                  <span
                    className="slider"
                    onClick={() =>
                      props.setGameSettings((prevSettings) => ({
                        ...prevSettings,
                        showTime: !prevSettings.showTime,
                      }))
                    }
                  ></span>
                </label>
              </div>
            </li>
            <li>
              <span>
                <AiFillSound size={15} /> audio:
              </span>
              <div>
                <label className="checkboxcontainer">
                  <input
                    readOnly
                    className="checkbox"
                    type="checkbox"
                    checked={props.gameSettings.audio}
                  />
                  <span
                    className="slider"
                    onClick={() =>
                      props.setGameSettings((prevSettings) => ({
                        ...prevSettings,
                        audio: !prevSettings.audio,
                      }))
                    }
                  ></span>
                </label>
              </div>
            </li>

            <hr />
            <li>
              <span>
                <FaDonate size={15} /> donate:
              </span>
              <div>
                <ExternalLink href="https://twitter.com">link</ExternalLink>
              </div>
            </li>

            <li>
              <span>
                <FaTwitter size={15} /> twitter:
              </span>
              <div>
                <ExternalLink href="https://twitter.com">link</ExternalLink>
              </div>
            </li>

            <li>
              <span>
                <SiDiscord size={15} /> discord:
              </span>
              <div>
                <ExternalLink href="https://twitter.com">link</ExternalLink>
              </div>
            </li>

            <li>
              <span>
                <FaGithub size={15} /> github:
              </span>
              <div>
                <ExternalLink href="https://twitter.com">link</ExternalLink>
              </div>
            </li>
            <hr />

            <li>
              <span>
                <FaCog size={15} /> restore settings to default:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.wordLength === 15 && "set"}`}
                  onClick={() => props.setGameSettings(INITIAL_STATE)}
                >
                  reset
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

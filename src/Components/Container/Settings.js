import React from "react";
import { IoMdQuote } from "react-icons/io";
import { SiLetterboxd } from "react-icons/si";
import { BsFillVolumeDownFill } from "react-icons/bs";
import { MdSubdirectoryArrowRight, MdFormatItalic } from "react-icons/md";
import { FaClock, FaTachometerAlt, FaBars } from "react-icons/fa";

export default function Settings(props) {
  const [open, setOpen] = React.useState(false);

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
      <div className={`settings`}>
        <div className="settings__inner">
          <ul>
            {props.gameSettings.mode === "words" && (
              <>
                <li>
                  <span>
                    <SiLetterboxd /> Words Length:
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
                    <IoMdQuote /> Quote Length:
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
                <FaBars /> Mode:
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
                  Quote
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
                  Words
                </p>
              </div>
            </li>
            <li>
              <span>
                <MdFormatItalic size={15} /> Caret:
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
                  Underline
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
                  Block
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
                  Off
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaTachometerAlt /> Show WPM:
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
                <FaClock /> Letter Progress:
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
                <FaClock /> Word Progress:
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
                <FaClock /> Show Time:
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
                <BsFillVolumeDownFill size={20} /> Audio:
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
          </ul>
        </div>
      </div>
    )
  );
}

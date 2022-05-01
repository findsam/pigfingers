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
                  <MdSubdirectoryArrowRight size={15} /> Quote
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
                  <MdSubdirectoryArrowRight size={15} /> Words
                </p>
              </div>
            </li>
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
                      <MdSubdirectoryArrowRight size={15} /> 25
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
                      <MdSubdirectoryArrowRight size={15} /> 50
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
                      <MdSubdirectoryArrowRight size={15} /> 60
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
                      <MdSubdirectoryArrowRight size={15} /> all
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
                      <MdSubdirectoryArrowRight size={15} /> small
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
                      <MdSubdirectoryArrowRight size={15} /> medium
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
                      <MdSubdirectoryArrowRight size={15} /> long
                    </p>
                  </div>
                </li>
              </>
            )}
            <li>
              <span>
                <FaTachometerAlt /> Show WPM:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.showWpm === true && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      showWpm: true,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> on
                </p>
                <p
                  className={`${props.gameSettings.showWpm === false && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      showWpm: false,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> off
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> Letter Progress:
              </span>
              <div>
                <p
                  className={`${
                    props.gameSettings.letterProg === true && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      letterProg: true,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> on
                </p>
                <p
                  className={`${
                    props.gameSettings.letterProg === false && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      letterProg: false,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> off
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> Word Progress:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.wordProg === true && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordProg: true,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> on
                </p>
                <p
                  className={`${
                    props.gameSettings.wordProg === false && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordProg: false,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> off
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaClock /> Show Time:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.showTime === true && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      showTime: true,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> on
                </p>
                <p
                  className={`${
                    props.gameSettings.showTime === false && "set"
                  }`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      showTime: false,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> off
                </p>
              </div>
            </li>
            <li>
              <span>
                <BsFillVolumeDownFill size={20} /> Audio:
              </span>
              <div>
                <p
                  className={`${props.gameSettings.audio === true && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      audio: true,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> on
                </p>
                <p
                  className={`${props.gameSettings.audio === false && "set"}`}
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      audio: false,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> off
                </p>
              </div>
            </li>

            <li>
              <span>
                <MdFormatItalic size={20} /> Caret:
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
                  <MdSubdirectoryArrowRight size={15} /> Underline
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
                  <MdSubdirectoryArrowRight size={15} /> Block
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
                  <MdSubdirectoryArrowRight size={15} /> Off
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

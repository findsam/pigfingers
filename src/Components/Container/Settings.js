import React from "react";
import { SiLetterboxd } from "react-icons/si";
import { IoMdQuote } from "react-icons/io";
import { FaClock, FaTachometerAlt, FaBars } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";

export default function Settings(props) {
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

  // console.log(props.gameSettings);
  return (
    open && (
      <div className="settings">
        <div className="settings__inner">
          <ul>
            <li>
              <span>
                <FaBars /> Mode...
              </span>
              <div>
                <p
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
            <li>
              <span>
                <SiLetterboxd /> Words Length...
              </span>
              <div>
                <p
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordLength: 25,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> 25
                </p>
                <p
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordLength: 50,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> 50
                </p>
                <p
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordLength: 75,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> 75
                </p>
                <p
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      wordLength: 100,
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> 100
                </p>
              </div>
            </li>
            <li>
              <span>
                <IoMdQuote /> Quote Length...
              </span>
              <div>
                <p
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
                  onClick={() =>
                    props.setGameSettings((prevSettings) => ({
                      ...prevSettings,
                      quoteLength:
                        "https://api.quotable.io/random?minLength=300&maxLength=500",
                    }))
                  }
                >
                  <MdSubdirectoryArrowRight size={15} /> large
                </p>
              </div>
            </li>
            <li>
              <span>
                <FaTachometerAlt /> Show WPM...
              </span>
              <div>
                <p
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
                <FaClock /> Letter Progress...
              </span>
              <div>
                <p
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
                <FaClock /> Word Progress...
              </span>
              <div>
                <p
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
                <FaClock /> Show Time...
              </span>
              <div>
                <p
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
          </ul>
        </div>
      </div>
    )
  );
}

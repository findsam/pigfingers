// import Logo from "../Static/Sound/logo.png";
import { FaTwitter, FaGithub, FaHeart } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { useRef, useCallback, useState } from "react";
import { sleep } from "../Static/Utils";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Header(props) {
  const [donate, setDonate] = useState(true);
  const donateRef = useRef(null);

  const close = useCallback(() => {
    setDonate(async (prevOpen) => {
      if (prevOpen === true) {
        donateRef.current.style = `transform: translateY(-10px); opacity:0;`;
        await sleep(400);
        setDonate(false);
      } else if (prevOpen === false) {
        setDonate(true);
      }
    });
  }, []);

  return (
    <header className={`header`}>
      <aside className={`header__item header__item--left`}>
        <div className="header__logo">
          <h1 onClick={() => close()}>pigfingers</h1>
        </div>
        {donate && (
          <div ref={donateRef} className="donate">
            <div>
              <h1>Supporting Pigfingers</h1>
              <p></p>
              <ul className="donate__ul">
                <li>
                  <ExternalLink href="https://twitter.com">
                    Twitter
                    <FaTwitter size={18} />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://discord.com">
                    Discord
                    <SiDiscord size={19} />
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://discord.com">
                    Github
                    <FaGithub size={17} />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </aside>
    </header>
  );
}

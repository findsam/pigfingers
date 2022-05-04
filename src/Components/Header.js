// import Logo from "../Static/Sound/logo.png";
// import { FaTwitter, FaGithub, FaHeart } from "react-icons/fa";
// import { SiDiscord } from "react-icons/si";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Header(props) {
  return (
    <header className={`header`}>
      <aside className={`header__item header__item--left`}>
        <div className="header__logo">
          <span className="top">www.</span>
          <h1>PIGFINGERS</h1>
          <span className="bottom">.gg</span>
        </div>
      </aside>
      {/* <aside
        className={`header__item header__item--right ${
          props.playing && "close"
        }`}
      >
        <ul className="header__item__ul">
          <li>
            <ExternalLink href="https://twitter.com">
              <FaTwitter size={18} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              <SiDiscord size={19} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              <FaGithub size={17} />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              Donate
              <FaHeart size={17} />
            </ExternalLink>
          </li>
        </ul>
      </aside> */}
    </header>
  );
}

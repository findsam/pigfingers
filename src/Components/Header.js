// import Logo from "../Static/Sound/logo.png";
import { FaTwitter, FaGithub, FaHeart } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Header(props) {
  return (
    <header className={`header`}>
      <aside className={`header__item header__item--left`}>
        {/* <img src={Logo} alt="Pigfingers logo" /> */}
      </aside>
      <aside
        className={`header__item header__item--right ${
          props.playing && "close"
        }`}
      >
        <ul className="header__item__ul">
          <li>
            <ExternalLink href="https://twitter.com">
              <FaTwitter size={15} />
              Twitter
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              <SiDiscord size={15} />
              Discord
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              <FaGithub size={14} />
              Github
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://discord.com">
              <FaHeart size={14} />
              Donate
            </ExternalLink>
          </li>
        </ul>
      </aside>
    </header>
  );
}

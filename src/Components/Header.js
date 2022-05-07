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
          <h1>pigfingers</h1>
        </div>
      </aside>

      <div className="donate"></div>
    </header>
  );
}

export default function Header(props) {
  return (
    <header className={`header`}>
      <aside className={`header__item header__item--left`}>Pigfingers</aside>
      <aside
        className={`header__item header__item--right ${
          props.playing && "close"
        }`}
      >
        <ul className="header__item__ul">
          <li>twitter</li>
          <li>twitter</li>
          <li>twitter</li>
          <li>twitter</li>
        </ul>
      </aside>
    </header>
  );
}

import { RxHamburgerMenu } from "react-icons/rx";

function Navigate() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item--hamburger">
          <div className="nav__hamburger">
            <span className="nav__hamburger-icon">
              <RxHamburgerMenu />
            </span>
            <span className="nav__hamburger-text">Menu</span>
          </div>
        </li>
        <li className="nav__item">
          <a className="nav__item nav__item--logo" href="/">
            porsche
          </a>
        </li>
        <li className="nav__item nav__item--hidden"></li>
      </ul>
    </nav>
  );
}

export default Navigate;

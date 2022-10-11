//Header component

import Avatar from "@mui/material/Avatar";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Container />
    </>
  );
}

function Container() {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav__inner">
          <li className="navbar__items navbar__items--left">
            <HEADER_LEFT />
          </li>

          <li className="navbar__items navbar__items--center">
            <HEADER_CENTER />
          </li>
          <li className="navbar__items navbar__items--right">
            <HEADER_RIGHT />
          </li>
        </ul>
      </nav>
    </header>
  );
}

function HEADER_LEFT() {
  return (
    <>
      <div>
        <span>W</span>
        <span>M</span>
      </div>
    </>
  );
}

function HEADER_CENTER() {
  return (
    <>
      <form>
        <input type="text"></input>
      </form>
    </>
  );
}

function HEADER_RIGHT() {
  return (
    <>
      <div className="navbar__item--right">
        <Avatar />
      </div>

      <div className="navbar__item--right">
        <span>Become A Member</span>
      </div>
      <div className="navbar__item--right">
        <ShoppingBagIcon />
      </div>
    </>
  );
}

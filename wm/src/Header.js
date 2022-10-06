//Header component

import { Avatar } from "@mui/material/Avatar";

export default function Header() {
  return (
    <>
      <Container className="container " />
    </>
  );
}

function Container() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <HEADER_LEFT />
          </li>

          <li>
            <HEADER_CENTER />
          </li>
          <li>
            <HEADER_RIGHT />
          </li>
        </ul>
      </nav>
    </>
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
      <input type="text"></input>
    </>
  );
}

function HEADER_RIGHT() {
  return (
    <>
      <div>
        <Avatar />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </>
  );
}

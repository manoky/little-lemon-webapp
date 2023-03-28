import { Nav } from "./Nav";
import logo from "./Logo.svg";

export const Header = () => (
  <header>
    <img src={logo} alt="" /> <Nav />
  </header>
);

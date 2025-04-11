import NavbarButton from "./navbarButton";
import "./navbar.scss";
import { Page } from "../../../App";

const Navbar = ({ pages }: { pages: Page[] }) => {
  return (
    <ul className="navbar">
      {pages.map((page) => (
        <li key={page.id} className="navbar__button navbar__button--animation">
          <NavbarButton page={page} />
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

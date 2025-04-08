import React from "react";
import NavbarButton from "./navbarButton";
import "./navbar.scss";

const Navbar = ({ pages }) => {
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

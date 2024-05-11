import React from "react";
import NavbarButton from "./navbarButton"
import { useLocation } from "react-router";
import "./navbar.scss"

const Navbar = props => {
  let location = useLocation()
  console.log(location)
  return (
    <ul className="navbar">
      {props.pages.map(page => {
        return (
          <NavbarButton page={page} location={location} />
        );
      })}
    </ul>
  );
};

export default Navbar;

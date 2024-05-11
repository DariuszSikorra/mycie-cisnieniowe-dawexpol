import React from "react";
import { NavLink } from "react-router-dom";

import { useSpring, animated } from "react-spring";

import "./navbar.scss";

const NavbarButton = props => {
  const activeLink = useSpring({
    background:
      props.location.pathname === props.page.path
        ? "rgba( 250, 250, 250, 0.2"
        : "white",
    transform:
      props.location.pathname === props.page.path
        ? "scale( 1, 1 )"
        : "scale( 0, 0 )"
  });
  return (
    <li className="navbar__button navbar__button--animation">
      {props.location.pathname === props.page.path
        ? console.log(props.page.path)
        : null}
      <NavLink
        className="button__link"
        exact
        activeClassName="button__link--active"
        key={props.page.path}
        to={props.page.path}
      >
        {props.page.name}
      </NavLink>
      <animated.div style={activeLink} className="button__link--background"></animated.div>
    </li>
  );
};

export default NavbarButton;

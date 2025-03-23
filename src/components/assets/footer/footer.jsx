import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.scss";

const Footer = (props) => {
  return (
    <>
      <ul className="footer__navlinks">
        {props.pages.map((route) => {
          return (
            <>
              <li className="footer__button">
                <NavLink
                  className="button__link"
                  key={route.path}
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            </>
          );
        })}
      </ul>
      <ul className="footer__contact">
        <li>
          <strong>Kontakt:</strong>
        </li>
        <li>Krzysztof Sikorra</li>
        <li>+48 729 534 719</li>
      </ul>
    </>
  );
};

export default Footer;

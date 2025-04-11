import { NavLink } from "react-router-dom";
import "./footer.scss";

// Example: import your logo here
import logo from "../logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      {/* Navigation Links */}
      <ul className="footer__navlinks">
        {props.pages.map((route) => (
          <li className="footer__button" key={route.path}>
            <NavLink className="button__link" to={route.path}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Contact Info */}
      <ul className="footer__contact">
        <li>
          <strong>Kontakt:</strong>
        </li>
        <li>Krzysztof Sikorra</li>
        <li>+48 729 534 719</li>
      </ul>

      {/* Logo Section */}
      <div className="footer__logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </footer>
  );
};

export default Footer;

import { NavLink, useMatch } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./navbar.scss";

const NavbarButton = ({ page }) => {
  const match = useMatch(page.path);
  const isActive = !!match;

  const activeLink = useSpring({
    background: isActive ? "rgba(250, 250, 250, 0.2)" : "white",
    transform: isActive ? "scale(1, 1)" : "scale(0, 0)",
  });

  return (
    <>
      <NavLink
        to={page.path}
        className={({ isActive }) =>
          isActive ? "button__link button__link--active" : "button__link"
        }
        end
      >
        {page.name}
      </NavLink>
      <animated.div style={activeLink} className="button__link--background" />
    </>
  );
};

export default NavbarButton;

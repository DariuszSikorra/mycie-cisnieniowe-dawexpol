import { NavLink } from "react-router-dom";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../logo.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: theme.spacing(2),
  flexWrap: "wrap",
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));

const NavList = styled(List)(() => ({
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0,
}));

const NavItem = styled(ListItem)(() => ({
  padding: "2px",
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const ContactList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  margin: 0,
  "& li": {
    padding: "2px",
  },
}));

const LogoContainer = styled(Box)(() => ({
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  "& img": {
    maxWidth: "150px",
    height: "auto",
    marginTop: "4px",
  },
}));

const Footer = ({ pages }) => {
  return (
    <FooterContainer component="footer">
      <Box>
        <ContactList component="p">
          <Typography variant="subtitle1" fontWeight="bold">
            Kontakt:&nbsp;
          </Typography>
          Krzysztof Sikorra- +48 729 534 719
        </ContactList>

        <hr />

        <NavList component="ul">
          {pages.map((route) => (
            <NavItem key={route.path}>
              <StyledNavLink to={route.path}>{route.name}</StyledNavLink>
            </NavItem>
          ))}
        </NavList>
      </Box>

      <LogoContainer>
        <img src={logo} alt="Company Logo" style={{ borderRadius: 8 }} />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;

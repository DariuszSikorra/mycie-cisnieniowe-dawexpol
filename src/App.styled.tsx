import { Box, Button, Container, styled } from "@mui/material";

export const AppWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100vw",
  overflowX: "hidden",
}));

export const InternalContainer = styled(Container)(() => ({
  width: "100%",
  marginLeft: "auto",
  padding: 0,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& picture, & img": {
    width: "100%",
    height: "auto",
    maxHeight: "600px",
    display: "block",
    objectFit: "cover",

    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "550px",
    },
  },
}));

export const HeroButton = styled(Button)(() => ({
  padding: "0.6rem 1rem",
  fontSize: "0.9rem",
  whiteSpace: "nowrap",
  maxWidth: "90vw",
  width: "fit-content",
}));

export const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1, // allow Main to grow between Navbar and Footer
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

export const MainContent = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: theme.spacing(2),
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

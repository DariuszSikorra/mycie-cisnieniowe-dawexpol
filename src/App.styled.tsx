import { Box, Button, Container, styled } from "@mui/material";

export const AppWrapper = styled(Box)(() => ({
  width: "100vw",
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto auto 1fr auto",
  overflowX: "hidden",
}));

export const InternalContainer = styled(Container)(() => ({
  width: "100%",
  marginLeft: "auto",
  padding: 0,
}));

export const HeroImageContainer = styled(Box)(({ theme }) => ({
  gridRow: "2 / 3",
  position: "relative",
  width: "100%",
  overflow: "hidden",

  "& picture, & img": {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
    maxHeight: "400px",

    [theme.breakpoints.down("sm")]: {
      maxHeight: "200px",
    },
    [theme.breakpoints.up("lg")]: {
      maxHeight: "350px",
    },
  },
}));

export const HeroButton = styled(Button)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "0.6rem 1rem",
  fontSize: "0.9rem",
  whiteSpace: "nowrap",
  maxWidth: "90vw",
}));

export const Main = styled(Box)(({ theme }) => ({
  gridRow: "3 / 4",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

export const MainContent = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: "1200px",
  padding: theme.spacing(2),
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  gridRow: "4 / 5",
  // padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

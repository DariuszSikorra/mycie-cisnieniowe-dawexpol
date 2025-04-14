import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import Home from "./components/home/home";
import QuestionsForm from "./components/questionsForm/questionsForm";
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/assets/footer/footer";
import Navbar from "./components/navbar/navbar";

import CallIcon from "@mui/icons-material/Call";

import wallSmall from "./components/assets/sprayer_small.png";
import wallMedium from "./components/assets/sprayer_medium.png";
import wallBig from "./components/assets/sprayer_big.png";

import {
  AppWrapper,
  HeroButton,
  HeroImageContainer,
  InternalContainer,
  Main,
  MainContent,
} from "./App.styled";
import { Typography } from "@mui/material";

export type Page = {
  id: number;
  exact: boolean;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: any) => JSX.Element;
  name: string;
};

const pages: Page[] = [
  { id: 1, exact: true, path: "/", component: Home, name: "O nas" },
  {
    id: 3,
    exact: false,
    path: "/contact",
    component: Contact,
    name: "Kontakt",
  },
  {
    id: 4,
    exact: false,
    path: "/gallery",
    component: Gallery,
    name: "Galeria",
  },
  {
    id: 5,
    exact: false,
    path: "/questionsForm",
    component: QuestionsForm,
    name: "Najczęstsze pytania",
  },
];

function App() {
  const handleContactClick = () => {
    console.log("User clicked to contact me!");
    window.location.href = "tel:+48 729 534 719";
  };

  return (
    <Router>
      <AppWrapper>
        <InternalContainer>
          <Navbar pages={pages} />

          <HeroImageContainer>
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div>
                <Typography
                  component={"h1"}
                  variant="h3"
                  style={{ textShadow: "1px 2px 1px black" }}
                >
                  Profesjonalne mycie ciśnieniowe
                </Typography>
              </div>
              <HeroButton
                variant="contained"
                onClick={handleContactClick}
                endIcon={<CallIcon />}
              >
                Umów się na wycenę
              </HeroButton>
            </div>
            <picture>
              <source media="(min-width: 1200px)" srcSet={wallBig} />
              <source media="(min-width: 600px)" srcSet={wallMedium} />
              <img src={wallSmall} alt="WetsandingImage" />
            </picture>
          </HeroImageContainer>

          <Main>
            <MainContent>
              <Routes>
                {pages.map((page) => (
                  <Route
                    path={page.path}
                    key={page.id}
                    element={<page.component pages={pages} />}
                  />
                ))}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </MainContent>
          </Main>

          <Footer pages={pages} />
        </InternalContainer>
      </AppWrapper>
    </Router>
  );
}

export default App;

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import Home from "./components/home/home";
import QuestionsForm from "./components/questionsForm/questionsForm";
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/assets/footer/footer";
import Navbar from "./components/navbar/navbar";

import CallIcon from "@mui/icons-material/Call";

import wallSmall from "./components/assets/wall_small.jpg";
import wallMedium from "./components/assets/wall_medium.jpg";
import wallBig from "./components/assets/wall_big.jpg";

import {
  AppWrapper,
  FooterWrapper,
  HeroButton,
  HeroImageContainer,
  InternalContainer,
  Main,
  MainContent,
} from "./App.styled";

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
    <AppWrapper>
      <InternalContainer>
        <Router>
          <Navbar pages={pages} brandName="DAWEX-POL" />

          <HeroImageContainer>
            <HeroButton
              variant="contained"
              onClick={handleContactClick}
              endIcon={<CallIcon />}
            >
              Umów się na wycenę
            </HeroButton>
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

          <FooterWrapper>
            <Footer pages={pages} />
          </FooterWrapper>
        </Router>
      </InternalContainer>
    </AppWrapper>
  );
}

export default App;

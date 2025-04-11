import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./components/contact/contact";
import Gallery from "./components/gallery/gallery";
import Home from "./components/home/home";
import QuestionsForm from "./components/questionsForm/questionsForm";
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/assets/footer/footer";

import Navbar from "./components/navbar/navbar"; // <-- NEW import

import "./App.scss";
import wall from "./components/assets/wall_mk.2.jpg";
import { Button } from "@mui/material";

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
    <div className="app" style={{ width: "100vw" }}>
      <Router>
        <Navbar pages={pages} brandName="DAWEX-POL" />
        <div className="app__image" style={{ position: "relative" }}>
          <Button
            variant="contained"
            onClick={handleContactClick}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "0.9rem",
              padding: "0.55rem 0.5rem",
            }}
          >
            Umów się na wycenę!
          </Button>
          <img className="image" src={wall} alt="WetsandingImage" />
        </div>
        <div className="app__main">
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
        </div>
        <div className="app__footer">
          <Footer pages={pages} />
        </div>
      </Router>
    </div>
  );
}

export default App;

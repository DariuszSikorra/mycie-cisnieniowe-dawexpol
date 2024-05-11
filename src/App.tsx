import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/assets/navbar/navbar";
import Contact from "./components/contact/contact";
import Offer from "./components/offer/offer";
import Gallery from "./components/gallery/gallery";
import Home from "./components/home/home";
import QuestionsForm from "./components/questionsForm/questionsForm";
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/assets/footer/footer";

import "./App.scss";
import wall from "./components/assets/wall_mk.2.jpg";

const pages = [
  { id: 1, exact: true, path: "/", component: Home, name: "O nas" },
  {
    id: 2,
    exact: false,
    path: "/offer",
    component: Offer,
    name: "Oferta",
  },
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
  return (
    <div className="app" style={{width: "100vw"}}>
      <Router>
        <div className="app__navbar">
          <Navbar pages={pages} />
        </div>
        <div className="app__image">
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
            <Route element={ErrorPage} />
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

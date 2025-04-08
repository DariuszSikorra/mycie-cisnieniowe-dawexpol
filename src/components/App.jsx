import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/navbar/navbar";
import Contact from "./contact/contact";
import Gallery from "./gallery/gallery";
import Home from "./home/home";
import QuestionsForm from "./questionsForm/questionsForm";
import ErrorPage from "./errorPage/errorPage";
import Footer from "./assets/footer/footer";

import "./App.scss";

import wallSmall from "./assets/wall_small.jpg";
import wallMedium from "./assets/wall_medium.jpg";
import wallLarge from "./assets/wall_large.jpg";

const pages = [
  { id: 1, path: "/", component: Home, name: "O nas" },
  { id: 2, path: "/contact", component: Contact, name: "Kontakt" },
  { id: 3, path: "/gallery", component: Gallery, name: "Galeria" },
  {
    id: 4,
    path: "/questionsForm",
    component: QuestionsForm,
    name: "Najczęstsze pytania",
  },
];

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__navbar">
          <Navbar pages={pages} />
        </div>

        <div className="app__image">
          <picture>
            <source srcSet={wallSmall} media="(max-width: 600px)" />
            <source srcSet={wallMedium} media="(max-width: 1200px)" />
            <img className="image" src={wallLarge} alt="WetsandingImage" />
          </picture>
        </div>

        <div className="app__main">
          <Routes>
            {pages.map((page) => (
              <Route
                key={page.id}
                path={page.path}
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

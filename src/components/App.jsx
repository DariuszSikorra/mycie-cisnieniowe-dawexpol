import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import Navbar from "./assets/navbar/navbar";
import Contact from "./contact/contact";
import Gallery from "./gallery/gallery";
import Home from "./home/home";
import QuestionsForm from "./questionsForm/questionsForm";
import ErrorPage from "./errorPage/errorPage";
import Footer from "./assets/footer/footer";

import "./App.scss";
import wall from "./assets/wall_mk.2.jpg";

const pages = [
  { id: 1, exact: true, path: "/", component: Home, name: "O nas" },
  {
    id: 3,
    exact: false,
    path: "/contact",
    component: Contact,
    name: "Kontakt"
  },
  {
    id: 4,
    exact: false,
    path: "/gallery",
    component: Gallery,
    name: "Galeria"
  },
  {
    id: 5,
    exact: false,
    path: "/questionsForm",
    component: QuestionsForm,
    name: "Najczęstsze pytania"
  }
];
 
function bounce(val) {
  return spring(val, {
    stiffness: 30
  });
}

const opacityTransition = {
  atEnter: {
    opacity: 0
  },
  atLeave: {},
  atActive: {
    opacity: bounce(1)
  }
};

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__navbar">
          <Navbar pages={pages} />
        </div>
        <div className="app__image">
          <img className="image" src={wall} alt="WetsandingImage" />
        </div>
        <div className="app__main">
          <AnimatedSwitch
            atEnter={opacityTransition.atEnter}
            atLeave={opacityTransition.atLeave}
            atActive={opacityTransition.atActive}
          >
            {pages.map(page => (
              <Route
                exact={page.exact}
                path={page.path}
                key={page.key}
                render={props => <page.component {...props} pages={pages} />}
              />
            ))}
            <Route component={ErrorPage} />
          </AnimatedSwitch>
        </div>
        <div className="app__footer">
          <Footer pages={pages} />
        </div>
      </Router>
    </div>
  );
}

export default App;

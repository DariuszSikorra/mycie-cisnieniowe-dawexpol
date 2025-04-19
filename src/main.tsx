import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

import { HashRouter as Router } from "react-router-dom";

ReactGA.initialize("G-RK348SW7W7"); // your Measurement ID

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "../Home";
import About from "../About";
import Education from "../Education";
import Experience from "../Experience";

export default () => (
  <Fragment>
    <CssBaseline />
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
      </Fragment>
    </Router>
  </Fragment>
);

import React from "react";

import { CssBaseline } from "@material-ui/core";
import { SnackBarHandler } from "./components/SnackbarHandler";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
      </Switch>
      <SnackBarHandler />
    </Router>
  );
};

export default App;

import React from "react";

import { CssBaseline } from "@material-ui/core";
import { SnackBarHandler } from "./components/SnackbarHandler";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import GroceryListView from "./components/GroceryList";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/grocery-lists/:nodeId">
          <GroceryListView />
        </Route>
        <Route exact path="/">
          <Hero />
        </Route>
        <Redirect to="/" />
      </Switch>
      <SnackBarHandler />
    </Router>
  );
};

export default App;

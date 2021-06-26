import React from "react";

import { CssBaseline } from "@material-ui/core";
import { SnackBarHandler } from "./components/SnackbarHandler";

import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Hero />
      <SnackBarHandler />
    </React.Fragment>
  );
};

export default App;

import React from "react";

import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { GroceryList } from "./components/GroceryList";
import { SnackBarHandler } from "./components/SnackbarHandler";

const useStyles = makeStyles({
  appbar: {
    position: "relative",
    zIndex: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Groceries</Typography>
        </Toolbar>
      </AppBar>
      <GroceryList />
      <SnackBarHandler />
    </React.Fragment>
  );
};

export default App;

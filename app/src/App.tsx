import React from "react";

import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import { GroceryList } from "./components/GroceryList";
import { SnackBarHandler } from "./components/SnackbarHandler";
import { useQuery } from '@apollo/client';
import { GET_GROCERY_LISTS } from "./graphql/queries"

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
  const { loading, data } = useQuery<any>(GET_GROCERY_LISTS);
  console.log(loading)
  console.log(data)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Groceries</Typography>
        </Toolbar>
      </AppBar>
      <SnackBarHandler />
    </React.Fragment>
  );
};

export default App;

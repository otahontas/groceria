import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
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

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">Groceria</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

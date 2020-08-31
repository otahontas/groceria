import React, { useState } from "react";

import { AppBar, Container, CssBaseline, Divider, Fab, List, Paper, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Flip from "react-tiny-flip";
import { useRecoilValue } from "recoil";

import { GroceryListItem } from "./components/GroceryListItem";
import { GroceryListItemCreator } from "./components/GroceryListItemCreator";
import { todoListState } from "./state/atoms";
import { Item } from "./types";

const useStyles = makeStyles(theme => ({
  appbar: {
    position: "relative",
    zIndex: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  fab: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: `-${theme.spacing(4)}px`,
  },
}));

const App: React.FC = () => {
  const todoList = useRecoilValue(todoListState);
  const [showGroceryListItemCreator, setShowGroceryListItemCreator] = useState<boolean>(false);
  const toggleAddForm = () => setShowGroceryListItemCreator(showAddForm => !showAddForm);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            Groceries
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm">
        <Paper>
          <div className={classes.fab}>
            <Fab aria-label="add" onClick={toggleAddForm}>
              {showGroceryListItemCreator ? <CloseIcon /> : <AddIcon />}
            </Fab>
          </div>
          {showGroceryListItemCreator ? <GroceryListItemCreator toggle={toggleAddForm} /> : null}
          <List>
            <Flip>
              {todoList.map((todoItem: Item) => (
                <div key={todoItem.id}>
                  <GroceryListItem item={todoItem} />
                  {todoItem !== todoList[todoList.length - 1] && <Divider />}
                </div>
              ))}
            </Flip>
          </List>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default App;

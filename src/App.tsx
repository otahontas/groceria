import React, { useState, useEffect } from "react";

import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Fab,
  List,
  Paper,
  Toolbar,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Flip from "react-tiny-flip";
import { useRecoilState } from "recoil";

import { GroceryListItem } from "./components/GroceryListItem";
import { GroceryListItemCreator } from "./components/GroceryListItemCreator";
import grocecyListService from "./services/grocecyListService";
import { groceryListState } from "./state/atoms";
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
    transform: "translateY(-50%)",
    marginBottom: `-${theme.spacing(4)}px`,
  },
  infoText: {
    padding: theme.spacing(2),
  },
}));

const App: React.FC = () => {
  const [groceryList, setGroceryList] = useRecoilState(groceryListState);
  const [showGroceryListItemCreator, setShowGroceryListItemCreator] = useState<boolean>(false);
  const [fetchStatus, setFetchStatus] = useState<"unloaded" | "loading" | "loaded">("unloaded");
  const toggleAddForm = () => setShowGroceryListItemCreator(showAddForm => !showAddForm);
  const classes = useStyles();

  useEffect(() => {
    setFetchStatus("loading");
    const fetchList = async () => {
      const response = await grocecyListService.getAll();
      if (response.ok && response.data) {
        setGroceryList(response.data);
        setFetchStatus("loaded");
      } else {
        setFetchStatus("unloaded");
      }
    };
    fetchList();
  }, [setGroceryList, setFetchStatus]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Groceries</Typography>
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
          {fetchStatus === "unloaded" && null}
          {fetchStatus === "loading" && <CircularProgress color="secondary" />}
          {fetchStatus === "loaded" && groceryList.length === 0 ? (
            <Container maxWidth="xs" className={classes.infoText}>
              <Typography align="center">Use the plus icon to add a new list item.</Typography>
            </Container>
          ) : (
            <List>
              <Flip>
                {groceryList.map((item: Item) => (
                  <div key={item.id}>
                    <GroceryListItem item={item} />
                    {item !== groceryList[groceryList.length - 1] && <Divider />}
                  </div>
                ))}
              </Flip>
            </List>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default App;

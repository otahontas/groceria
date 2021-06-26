import React, { useEffect, useState } from "react";

import {
  CircularProgress,
  Container,
  Divider,
  Fab,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useRecoilState, useSetRecoilState } from "recoil";

// import grocecyListService from "../services/grocecyListService";
import { snackBarMessageState } from "../state/atoms";

//import { GroceryListItem } from "./GroceryListItem";
// import { GroceryListItemCreator } from "./GroceryListItemCreator";

const useStyles = makeStyles((theme) => ({
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
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const GroceryList = () => {
  // const [groceryList, setGroceryList] = useRecoilState(groceryListState);
  const setSnackbarMessage = useSetRecoilState(snackBarMessageState);

  const [showGroceryListItemCreator, setShowGroceryListItemCreator] =
    useState<boolean>(false);
  // const [fetchStatus, setFetchStatus] = useState<
  //   "unloaded" | "loading" | "loaded"
  // >("unloaded");

  const classes = useStyles();
  const toggleAddForm = () =>
    setShowGroceryListItemCreator((showAddForm) => !showAddForm);
  // useEffect(() => {
  //   setFetchStatus("loading");
  //   const fetchList = async () => {
  //     const response = await grocecyListService.getAll();
  //     if (response.ok && response.data) {
  //       setGroceryList(response.data);
  //       setFetchStatus("loaded");
  //     } else {
  //       setFetchStatus("unloaded");
  //       setSnackbarMessage("Couldn't load items, please try again");
  //     }
  //   };
  //   fetchList();
  // }, [setGroceryList, setFetchStatus, setSnackbarMessage]);

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <div className={classes.fab}>
          <Fab aria-label="add" onClick={toggleAddForm}>
            {showGroceryListItemCreator ? <CloseIcon /> : <AddIcon />}
          </Fab>
        </div>
      </Paper>
    </Container>
  );
};

export default GroceryList;
        // {showGroceryListItemCreator ? (
        //   <GroceryListItemCreator toggle={toggleAddForm} />
        // ) : null}


        // {fetchStatus === "unloaded" && null}
        // {fetchStatus === "loading" && (
        //   <div className={classes.loading}>
        //     <CircularProgress color="secondary" />
        //   </div>
        // )}
        // {fetchStatus === "loaded" && groceryList.length === 0 ? (
        //   <Container maxWidth="xs" className={classes.infoText}>
        //     <Typography align="center">
        //       Use the plus icon to add a new list item.
        //     </Typography>
        //   </Container>
        // ) : (
        //   <List>
        //     <Flip>
        //       {groceryList.map((item: Item) => (
        //         <div key={item.id}>
        //           <GroceryListItem item={item} />
        //           {item !== groceryList[groceryList.length - 1] && <Divider />}
        //         </div>
        //       ))}
        //     </Flip>
        //   </List>
        // )}

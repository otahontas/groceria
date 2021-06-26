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
import { useSetRecoilState } from "recoil";

import { snackBarMessageState } from "../state/atoms";
import { useGroceryListQuery, GroceryList } from "../generated/graphql";

// import { GroceryListItem } from "./GroceryListItem";
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
    padding: theme.spacing(2),
  },
}));

const GroceryListView = () => {
  const setSnackbarMessage = useSetRecoilState(snackBarMessageState);
  const nodeId = "WyJncm9jZXJ5X2xpc3RzIiwyXQ==";
  const { data, loading, error } = useGroceryListQuery({
    variables: {
      nodeId: nodeId,
    },
  });
  const [showGroceryListItemCreator, setShowGroceryListItemCreator] =
    useState<boolean>(false);
  const classes = useStyles();

  const toggleAddForm = () =>
    setShowGroceryListItemCreator((showAddForm) => !showAddForm);

  useEffect(() => {
    if (error) {
      setSnackbarMessage("Couldn't load groceries, please try again");
    }
    // if (data?.groceryList == null) {
    //   setSnackbarMessage(`No grocery list with id ${nodeId}, please try again`);
    //   console.log(data)
    // }
  }, [data, loading, error, setSnackbarMessage]);

  return (
    <Container component="main" maxWidth="sm">
      <Paper>
        <div className={classes.fab}>
          <Fab aria-label="add" onClick={toggleAddForm}>
            {showGroceryListItemCreator ? <CloseIcon /> : <AddIcon />}
          </Fab>
        </div>
        {loading ? (
          <div className={classes.loading}>
            <CircularProgress color="secondary" />
          </div>
        ) : null}
      </Paper>
    </Container>
  );
};

export default GroceryListView;
// {showGroceryListItemCreator ? (
//   <GroceryListItemCreator toggle={toggleAddForm} />
// ) : null}

// {fetchStatus === "unloaded" && null}
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

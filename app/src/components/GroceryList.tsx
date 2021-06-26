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
import { useGroceryListQuery } from "../generated/graphql";

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
  const classes = useStyles();
  const setSnackbarMessage = useSetRecoilState(snackBarMessageState);
  const nodeId = "WyJncm9jZXJ5X2xpc3RzIiwyXQ==";
  const { data, loading, error } = useGroceryListQuery({
    variables: {
      nodeId: nodeId,
    },
  });
  const [showGroceryListItemCreator, setShowGroceryListItemCreator] =
    useState<boolean>(false);

  const toggleAddForm = () =>
    setShowGroceryListItemCreator((showAddForm) => !showAddForm);

  const groceryList = data?.groceryList?.groceryItemsByGroceryListId?.nodes;

  useEffect(() => {
    if (error) {
      setSnackbarMessage("Couldn't load groceries, please try again");
    }
  }, [error, setSnackbarMessage]);

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
        {groceryList
          ? groceryList.map((item) =>
              item ? (
                <div key={item.nodeId}>
                  <p>{item.name}</p>
                </div>
              ) : null
            )
          : null}
      </Paper>
    </Container>
  );
};

export default GroceryListView;
// {showGroceryListItemCreator ? (
//   <GroceryListItemCreator toggle={toggleAddForm} />
// ) : null}

// {fetchStatus === "loaded" && groceryList.length === 0 ? (
//   <Container maxWidth="xs" className={classes.infoText}>
//     <Typography align="center">
//       Use the plus icon to add a new list item.
//     </Typography>
//   </Container>
// ) : (
//   <List>
// )}
//
//
// const GroceryListContainer = ({groceryList: GroceryItem[]}) => {
//       {groceryList.map((item: Item) => (
//         <div key={item.id}>
//           <GroceryListItem item={item} />
//           {item !== groceryList[groceryList.length - 1] && <Divider />}
//         </div>
//       ))}
//     </Flip>
//   </List>
// }

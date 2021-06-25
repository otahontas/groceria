import React from "react";

import {
  Divider,
  FormHelperText,
  Grow,
  IconButton,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import SaveIcon from "@material-ui/icons/Save";
import { Field, Form, Formik } from "formik";
import { InputBase } from "formik-material-ui";
import { useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";

import grocecyListService from "../services/grocecyListService";
import { groceryListState, snackBarMessageState } from "../state/atoms";
import { Item, ItemFormValues } from "../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
  },
  field: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const GroceryListItemCreator: React.FC<{ toggle: () => void }> = ({
  toggle,
}) => {
  const setGroceryList = useSetRecoilState(groceryListState);
  const setSnackbarMessage = useSetRecoilState(snackBarMessageState);
  const classes = useStyles();

  const addItem = async (todo: Item) => {
    const response = await grocecyListService.add(todo);
    if (response.ok) {
      setGroceryList((oldTodoList: Item[]) => {
        const newList = [...oldTodoList, todo];
        newList.sort((a, b) =>
          a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1
        );
        return newList;
      });
    } else {
      setSnackbarMessage("Couldn't add new item, please try again");
    }
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validate={(values) => {
        const errors: Partial<ItemFormValues> = {};
        if (!values.text) errors.text = "Item can't be empty";
        return errors;
      }}
      onSubmit={(values) => {
        const todo = {
          id: uuid(),
          text: values.text,
          isComplete: false,
        };
        addItem(todo);
        toggle();
      }}
    >
      {({ submitForm, errors }) => (
        <div className={classes.root}>
          <Grow in>
            <Paper component={Form} className={classes.field}>
              <LocalGroceryStoreIcon />
              <Field
                component={InputBase}
                name="text"
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Add new item"
                inputProps={{ "aria-label": "add new item" }}
                className={classes.input}
              />
              <Divider orientation="vertical" className={classes.divider} />
              <IconButton aria-label="save" onClick={submitForm}>
                <SaveIcon />
              </IconButton>
            </Paper>
          </Grow>
          {errors.text ? (
            <FormHelperText error>{errors.text}</FormHelperText>
          ) : null}
        </div>
      )}
    </Formik>
  );
};

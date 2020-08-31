import React, { useState } from "react";

import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useRecoilState } from "recoil";

import grocecyListService from "../services/grocecyListService";
import { groceryListState } from "../state/atoms";
import { Item, ItemFormValues } from "../types";

export const GroceryListItem: React.FC<{ item: Item }> = ({ item }) => {
  const [groceryList, setGroceryList] = useRecoilState(groceryListState);
  const [editMode, setEditMode] = useState<boolean>(false);
  const index = groceryList.findIndex(listItem => listItem === item);

  const editItem = async (text: string) => {
    const newValue = {
      ...item,
      text,
    };
    const response = await grocecyListService.replace(item.id, newValue);
    if (response.ok) {
      const newList = replaceItemAtIndex(groceryList, index, newValue);
      setGroceryList(newList);
    }
  };

  const toggleItemCompletion = async () => {
    const newValue = {
      ...item,
      isComplete: !item.isComplete,
    };
    const response = await grocecyListService.replace(item.id, newValue);
    if (response.ok) {
      const newList = replaceItemAtIndex(groceryList, index, newValue);
      newList.sort((a, b) => (a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1));
      setGroceryList(newList);
    }
  };

  return (
    <ListItem>
      <ListItemIcon onClick={toggleItemCompletion}>
        <Checkbox edge="start" checked={item.isComplete} tabIndex={-1} disableRipple />
      </ListItemIcon>
      {editMode ? (
        <div>
          <Formik
            initialValues={{
              text: item.text,
            }}
            validate={values => {
              const errors: Partial<ItemFormValues> = {};
              if (!values.text) errors.text = "Item can't be empty";
              return errors;
            }}
            onSubmit={values => {
              editItem(values.text);
              setEditMode(false);
            }}
          >
            {({ submitForm }) => (
              <Form>
                <Field component={TextField} name="text" type="text" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="save" onClick={submitForm}>
                    <SaveIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="cancel edit" onClick={() => setEditMode(false)}>
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          <ListItemText style={{ textDecoration: item.isComplete ? "line-through" : "none" }} primary={item.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => setEditMode(true)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      )}
    </ListItem>
  );
};

function replaceItemAtIndex(arr: Item[], index: number, newValue: Item) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

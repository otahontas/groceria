import React, { useState } from "react";

import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useRecoilState } from "recoil";

import { todoListState } from "../state/atoms";
import { Item, ItemFormValues } from "../types";

export const GroceryListItem: React.FC<{ item: Item }> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editMode, setEditMode] = useState<boolean>(false);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = (text: string) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    newList.sort((a, b) => (a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1));
    setTodoList(newList);
  };

  // const deleteItem = () => {
  //   const newList = removeItemAtIndex(todoList, index);
  //   setTodoList(newList);
  // };

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
              if (!values.text) errors.text = "Grocery can't be empty";
              return errors;
            }}
            onSubmit={values => {
              editItemText(values.text);
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
                  <IconButton edge="end" aria-label="cencel edit" onClick={() => setEditMode(false)}>
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

// function removeItemAtIndex(arr: TodoItem[], index: number) {
//   return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

import React from "react";
import { GroceryItem } from "../generated/graphql";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

type Item = Pick<GroceryItem, "name" | "nodeId" | "isComplete">;

const GroceryListItem: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.isComplete}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <div>
        <ListItemText
          style={{
            textDecoration: item.isComplete ? "line-through" : "none",
          }}
          primary={item.name}
        />
        <ListItemSecondaryAction>
          {item.isComplete ? (
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => console.log("should delete")}
            >
              <DeleteForeverIcon />
            </IconButton>
          ) : null}
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => console.log("should toggle edit")}
          >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </div>
    </ListItem>
  );
};

export default GroceryListItem;

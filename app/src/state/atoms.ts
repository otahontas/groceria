import { atom } from "recoil";

import { Item } from "../types";

const initialList: Item[] = [];

export const groceryListState = atom({
  key: "groceryListState",
  default: initialList,
});

export const snackBarMessageState = atom({
  key: "snackBarMessageState",
  default: "",
});

import { atom } from "recoil";

import { Item } from "../types";

const initialList: Item[] = [];

export const todoListState = atom({
  key: "todoListState",
  default: initialList,
});

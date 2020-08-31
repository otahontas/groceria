import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: uuid(),
      text: "Maituli",
      isComplete: false,
    },
    {
      id: uuid(),
      text: "Saippua",
      isComplete: false,
    },
    {
      id: uuid(),
      text: "Mehuiza",
      isComplete: false,
    },
  ],
});

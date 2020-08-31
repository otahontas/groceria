export interface Item {
  id: string;
  text: string;
  isComplete: boolean;
}

export type ItemFormValues = Pick<Item, "text">;

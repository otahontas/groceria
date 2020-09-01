import { create } from "apisauce";

import { Item } from "../types";

const baseURL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL : "/api/items";
console.log(`baseURL is ${baseURL}`);
const api = create({ baseURL });

const getAll = async () => await api.get<Item[]>("");
const add = async (item: Item) => await api.post<Item[]>("", item);
const replace = async (id: string, item: Item) => await api.put<Item[]>(`/${id}`, item);
const remove = async (id: string) => await api.delete<Item[]>(`/${id}`);

export default { getAll, add, replace, remove };

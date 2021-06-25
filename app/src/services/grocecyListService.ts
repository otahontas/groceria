import { create } from "apisauce";

import { Item } from "../types";

const api = create({ baseURL: "/api/items" });

const getAll = async () => await api.get<Item[]>("");
const add = async (item: Item) => await api.post<Item[]>("", item);
const replace = async (id: string, item: Item) => await api.put<Item[]>(`/${id}`, item);
const remove = async (id: string) => await api.delete<Item[]>(`/${id}`);

export default { getAll, add, replace, remove };

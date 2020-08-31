import { create } from "apisauce";

import { Item } from "../types";

const base = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:5000";
const api = create({ baseURL: `${base}/items` });

const getAll = async () => await api.get<Item[]>("");
const add = async (item: Item) => await api.post<Item[]>("", item);
const replace = async (id: string, item: Item) => await api.put<Item[]>(`/${id}`, item);
const remove = async (id: string) => await api.delete<Item[]>(`/${id}`);

export default { getAll, add, replace, remove };

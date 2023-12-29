import { request } from "./request";

export const create = async (payload) =>
  await request.post("/api/category", payload);

export const listCategory = async () => await request.get("/api/category");

export const addProduct = async (id, listId) =>
  await request.put("/api/category/add-product/" + id, { listId });

export const deleteCategory = async (id) =>
  await request.delete("/api/category/" + id);

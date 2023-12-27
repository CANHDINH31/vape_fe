import { request } from "./request";

export const create = async (payload) =>
  await request.post("/api/product", payload);

export const listProduct = async () => await request.get("/api/product");

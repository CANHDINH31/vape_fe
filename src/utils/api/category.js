import { request } from "./request";

export const create = async (payload) =>
  await request.post("/api/category", payload);

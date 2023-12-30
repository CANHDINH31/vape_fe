import axios from "axios";
let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "https://busy-ruby-tuna-ring.cyclic.app";
} else {
  baseURL = "http://localhost:8000";
}

export const request = axios.create({
  baseURL,
});

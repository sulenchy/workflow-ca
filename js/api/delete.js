import { apiCall } from "./api.js";

export const deleteRequest = (url) => {
  apiCall(url, "delete");
};

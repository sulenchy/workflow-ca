import { apiCall } from "./api.js";

export const postRequest = (url, data) => {
  const result = apiCall(url, "post", data);
  return result;
};

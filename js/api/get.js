import { apiCall } from "./api.js";

export const getRequest = async (url) => {
  console.log(url);
  const profile = await apiCall(url, "get", undefined);
  return profile;
};

import { apiCall } from "../api/api.js";
import { fetchLocalStorage } from "../localStorage/localStorage.js";

export const fetchUsers = async () => {
  const token = fetchLocalStorage("token");
  const users = await apiCall(`social/profiles/?_following&_followers&_posts`, "get", undefined, `bearer ${token}`);
  return users;
};

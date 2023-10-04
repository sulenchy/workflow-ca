import { fetchLocalStorage } from "../localStorage/localStorage.js";

import { apiCall } from "../api/api.js";

const token = fetchLocalStorage("token");

export const fetchPosts = async (filter) => {
  const result = await apiCall(`social/posts/?_author=true&_comments=true&_reactions=true${filter}`, "get", undefined, `bearer ${token}`);
  return result;
};

export const fetchPost = async (id) => {
  try {
    const result = await apiCall(`social/posts/${id}/?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
    return result;
  } catch (error) {}
};

import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { updatePostsSection } from "./updatePosts.js";

export const checkEditPost = (author) => {
  const name = fetchLocalStorage("name");

  if (author === name) {
    return true;
  }
};

export const deletePost = async (id) => {
  const token = fetchLocalStorage("token");
  apiCall(`social/posts/${id}`, "delete", undefined, `bearer ${token}`);
  updatePostsSection();
};

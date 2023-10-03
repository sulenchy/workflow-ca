import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { createPosts } from "../render/createHtml/createPosts.js";

export const viewPost = (id) => {
  window.location.href = `/feed/index.html?id=${id}`;
};

export const fetchPost = async (id) => {
  try {
    const token = fetchLocalStorage("token");
    console.log(id);
    const result = await apiCall(`social/posts/${id}/?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
    createPosts(result);
    adjustingPageContent();
  } catch (error) {}
};

const adjustingPageContent = () => {
  const createPostContainer = document.querySelector(".create-post_container");
  const searchContainer = document.getElementById("posts-search_container");
  createPostContainer.remove();
  searchContainer.remove();
};

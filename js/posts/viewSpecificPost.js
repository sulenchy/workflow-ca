import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { createPosts } from "../render/createHtml/createPosts.js";
import { getUrlId } from "../functions/getUrlId.js";

export const viewPost = (postId) => {
  const id = getUrlId();
  if (Number(id) === postId) {
    return;
  }

  window.location.href = `/feed/index.html?id=${postId}`;
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

  const main = document.querySelector("main");
  main.style.height = "100vh";
  main.style.paddingTop = "50px";
};

import { apiCall } from "../js/api/api.js";
import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { renderPosts } from "../js/render/render.js";

const token = fetchLocalStorage("token");

const fetchPosts = async () => {
  const result = await apiCall(`social/posts?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
  renderPosts(result);
};

fetchPosts();

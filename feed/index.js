import { apiCall } from "../js/api/api.js";
import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { renderPosts } from "../js/render/render.js";
import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/functions/fetchImgUrl.js";

const form = document.getElementById("post-form");
form.addEventListener("submit", HandleSubmitPost);

const imgBtn = document.getElementById("img-btn");
imgBtn.addEventListener("click", fetchImgUrl);

const fetchPosts = async () => {
  const token = fetchLocalStorage("token");
  const result = await apiCall(`social/posts?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
  renderPosts(result);
};

fetchPosts();

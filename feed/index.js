import { apiCall } from "../js/api/api.js";
import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { renderPosts } from "../js/render/render.js";
import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/functions/fetchImgUrl.js";
import { fetchPost } from "../js/posts/viewSpecificPost.js";

const form = document.getElementById("post-form");
form.addEventListener("submit", (e) => {
  HandleSubmitPost(e);
  form.reset();
});

const imgBtn = document.getElementById("img-btn");
imgBtn.addEventListener("click", fetchImgUrl);

export const fetchPosts = async () => {
  const token = fetchLocalStorage("token");
  const result = await apiCall(`social/posts/?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
  renderPosts(result);
};

const checkId = () => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  if (id) {
    fetchPost(id);
    return;
  }
  fetchPosts();
};

checkId();

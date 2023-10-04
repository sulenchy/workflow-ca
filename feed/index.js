import { fetchPosts, fetchPost } from "../js/posts/fetch.js";
import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/functions/fetchImgUrl.js";
import { getUrlId } from "../js/functions/getUrlId.js";
import { renderPosts } from "../js/render/render.js";
import { createPosts } from "../js/render/createHtml/createPosts.js";
import { adjustingPageContent } from "../js/posts/viewSpecificPost.js";
import { filterPosts } from "../js/functions/filterFunctionality.js";
import { search } from "../js/functions/searchFunctionality.js";

const form = document.getElementById("post-form");
form.addEventListener("submit", (e) => {
  HandleSubmitPost(e);
  form.reset();
});

const imgBtn = document.getElementById("img-btn");
imgBtn.addEventListener("click", fetchImgUrl);

const displayPosts = async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    filterPosts(posts);
    search(posts);
  } catch (error) {
    console.log(error);
  }
};

const displayPost = async (id) => {
  try {
    const post = await fetchPost(id);
    createPosts(post);
    adjustingPageContent();
  } catch (error) {
    console.log(error);
  }
};

const checkHrefId = () => {
  const id = getUrlId();

  if (id) {
    displayPost(id);
    return;
  }
  displayPosts();
};

checkHrefId();

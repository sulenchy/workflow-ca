import { getRequest } from "../js/api/get.js";
import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/functions/fetchImgUrl.js";
import { getUrlId } from "../js/functions/getUrlId.js";
import { renderPosts } from "../js/render/render.js";
import { createPosts } from "../js/render/createHtml/createPosts.js";
import { adjustingPageContent } from "../js/posts/viewSpecificPost.js";
import { filterPosts } from "../js/functions/filterFunctionality.js";
import { search } from "../js/functions/searchFunctionality.js";
import { updatePostsSection } from "../js/posts/updatePosts.js";
import { toggleBtnClass } from "../js/functions/toggleBtnClass.js";
import { suggestUsers } from "../js/functions/suggestUsers.js";
import { changeSearchElements } from "../js/functions/changeSearchElements.js";
import { apiUrls } from "../js/api/constant.js";

const form = document.getElementById("post-form");
form.addEventListener("submit", (e) => {
  HandleSubmitPost(e);
  form.reset();
});

const imgBtn = document.getElementById("img-btn");
imgBtn.addEventListener("click", fetchImgUrl);

const followBtn = document.getElementById("followingBtn");
followBtn.addEventListener("click", () => {
  const id = followBtn.id;
  feedBtnHandler("following", id);
});

const allPostsBtn = document.getElementById("allPostsBtn");
allPostsBtn.addEventListener("click", () => {
  const id = allPostsBtn.id;
  feedBtnHandler(undefined, id);
  changeSearchElements();
});

const displayPosts = async (url) => {
  try {
    const posts = await getRequest(url);
    if (posts.length <= 0) {
      suggestUsers();
      return;
    }
    renderPosts(posts);
    filterPosts(posts);
    search();
  } catch (error) {
    console.log(error);
  }
};

const displayPost = async () => {
  try {
    const post = await getRequest(apiUrls.post_parameter);
    createPosts(post);
    adjustingPageContent();
  } catch (error) {
    console.log(error);
  }
};

const checkHrefId = () => {
  const id = getUrlId();

  if (id) {
    displayPost();
    return;
  }
  displayPosts(apiUrls.followed_posts);
};

checkHrefId();

const feedBtnHandler = (value, id) => {
  toggleBtnClass(id);
  updatePostsSection();

  if (value) {
    displayPosts(apiUrls.followed_posts);
  } else {
    displayPosts(apiUrls.posts_Parameter);
  }
};

import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/utils/fetchImgUrl.js";
import { getQueryParamId, updateHref } from "../js/utils/queryParam.js";
import { changeSearchElements } from "../js/utils/changeSearchElements.js";
import { apiUrls } from "../js/api/constant.js";
import { displayPosts, displayPost } from "../js/posts/displayPosts.js";
import { feedBtnHandler } from "../js/utils/feedBtnHandler.js";
import { search } from "../js/utils/searchFunctionality.js";
import { adjustingPageContent } from "../js/posts/viewSpecificPost.js";

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
  feedBtnHandler(displayPosts, apiUrls.followed_posts, id);
  updateHref();
});

const allPostsBtn = document.getElementById("allPostsBtn");
allPostsBtn.addEventListener("click", () => {
  const id = allPostsBtn.id;
  feedBtnHandler(displayPosts, apiUrls.posts_Parameter, id);
  changeSearchElements();
  updateHref();
});

const renderPageContent = async () => {
  const id = getQueryParamId();
  search();
  try {
    if (id) {
      displayPost();
      adjustingPageContent();
    } else {
      displayPosts(apiUrls.followed_posts);
    }
  } catch (error) {
    console.log(error);
  }
};

renderPageContent();

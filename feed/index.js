import { HandleSubmitPost } from "../js/posts/submitPosts.js";
import { fetchImgUrl } from "../js/utils/fetchImgUrl.js";
import { getUrlId } from "../js/utils/getUrlId.js";
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
  feedBtnHandler("following", id);
});

const allPostsBtn = document.getElementById("allPostsBtn");
allPostsBtn.addEventListener("click", () => {
  const id = allPostsBtn.id;
  feedBtnHandler(undefined, id);
  changeSearchElements();
});

const renderPageContent = async () => {
  const id = getUrlId();
  try {
    if (id) {
      const result = await displayPost();
      adjustingPageContent();
    } else {
      const result = await displayPosts(apiUrls.followed_posts);
      search();
    }
  } catch (error) {
    console.log(error);
  }
};

renderPageContent();

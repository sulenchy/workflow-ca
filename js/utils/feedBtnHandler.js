import { displayPosts } from "../posts/displayPosts.js";
import { apiUrls } from "../api/constant.js";
import { toggleBtnClass } from "./toggleBtnClass.js";
import { updatePostsSection } from "../posts/updatePostsContainer.js";

export const feedBtnHandler = (value, id) => {
  toggleBtnClass(id);
  updatePostsSection();

  if (value) {
    displayPosts(apiUrls.followed_posts);
  } else {
    displayPosts(apiUrls.posts_Parameter);
  }
};

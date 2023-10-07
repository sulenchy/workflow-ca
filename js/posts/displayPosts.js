import { suggestUsers } from "../utils/suggestUsers.js";
import { renderPosts } from "../render/render.js";
import { search } from "../utils/searchFunctionality.js";
import { getRequest } from "../api/get.js";
import { filterPosts } from "../utils/filterFunctionality.js";
import { apiUrls } from "../api/constant.js";
import { createPosts } from "../render/createHtml/createPosts.js";
import { adjustingPageContent } from "./viewSpecificPost.js";

export const displayPosts = async (url) => {
  try {
    const posts = await getRequest(url);
    console.log(posts);
    if (posts.length <= 0) {
      suggestUsers();
    }
    renderPosts(posts);
    filterPosts(posts);
    search();
    return true;
  } catch (error) {
    console.log(error);
    alert(`an error has occurred: ${error}`);
  }
};

export const displayPost = async () => {
  try {
    const post = await getRequest(apiUrls.post_parameter);
    createPosts(post);
    adjustingPageContent();
  } catch (error) {
    console.log(error);
  }
};

import { renderPosts } from "../render/render.js";
import { getRequest } from "../api/get.js";
import { filterPosts } from "../utils/filterFunctionality.js";
import { apiUrls } from "../api/constant.js";
import { createPosts } from "../render/createHtml/createPosts.js";
import { checkResult } from "../utils/suggestUsers.js";

export const displayPosts = async (url) => {
  try {
    const posts = await getRequest(url);
    checkResult(posts, renderPosts, `do not  follow anybody yet`);
    filterPosts(posts);
  } catch (error) {
    console.log(error);
    alert(`an error has occurred: ${error}`);
  }
};

export const displayPost = async () => {
  try {
    const post = await getRequest(apiUrls.post_parameter);
    createPosts(post);
  } catch (error) {
    console.log(error);
    alert(`an error has occurred: ${error}`);
  }
};

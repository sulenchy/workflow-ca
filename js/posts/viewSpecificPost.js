import { getQueryParamId } from "../utils/queryParam.js";

export const viewPost = (postId) => {
  const id = getQueryParamId();
  if (Number(id) === postId) {
    return;
  }

  window.location.href = `/feed/index.html?id=${postId}`;
};

export const adjustingPageContent = () => {
  const createPostContainer = document.querySelector(".create-post_container");
  createPostContainer.remove();

  const main = document.querySelector("main");
  main.style.minHeight = "100vh";
  main.style.paddingTop = "50px";
};

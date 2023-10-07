import { renderPosts } from "../render/render.js";
import { getRequest } from "../api/get.js";

export const updatePostsSection = (value, url) => {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ``;
  postsContainer.style.minHeight = "100vh";

  setTimeout(() => {
    if (value === "posts") {
      refetchPosts(url);
      console.log("working");
    }
    scrollToPosts();
  }, 500);
};

const scrollToPosts = () => {
  const postsSearchSection = document.getElementById("posts-search_container");
  postsSearchSection.scrollIntoView();
};

const refetchPosts = async (url) => {
  try {
    console.log(url);
    const posts = await getRequest(url);
    console.log(posts);
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
};

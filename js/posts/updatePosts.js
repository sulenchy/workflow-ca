import { renderPosts } from "../render/render.js";
import { fetchPosts } from "./fetch.js";

export const updatePostsSection = (posts) => {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ``;
  postsContainer.style.minHeight = "100vh";

  if (posts === "posts") {
    refetchPosts();
  }
  setTimeout(() => {
    scrollToPosts();
  }, 500);
};

const scrollToPosts = () => {
  const postsSearchSection = document.getElementById("posts-search_container");
  postsSearchSection.scrollIntoView();
  console.log(postsSearchSection);
};

const refetchPosts = async () => {
  const posts = await fetchPosts();
  renderPosts(posts);
};

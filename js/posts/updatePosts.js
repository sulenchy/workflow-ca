import { fetchPosts } from "../../feed/index.js";

export const updatePostsSection = () => {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ``;

  setTimeout(() => {
    fetchPosts();
  }, 300);

  setTimeout(() => {
    scrollToPosts();
  }, 500);
};

const scrollToPosts = () => {
  const postsSearchSection = document.getElementById("posts-search_container");
  postsSearchSection.scrollIntoView();
};

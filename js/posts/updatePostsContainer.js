import { displayPosts } from "./displayPosts.js";

export const updatePostsSection = (value, url) => {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ``;
  postsContainer.style.minHeight = "100vh";

  setTimeout(() => {
    if (value === "posts") {
      displayPosts(url);
      console.log("working");
    }
    scrollToPosts();
  }, 500);
};

const scrollToPosts = () => {
  const postsSearchSection = document.getElementById("posts-search_container");
  postsSearchSection.scrollIntoView();
};

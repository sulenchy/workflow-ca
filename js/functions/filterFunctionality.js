import { renderPosts } from "../render/render.js";
import { updatePostsSection } from "../posts/updatePosts.js";
import { fetchPosts } from "../posts/fetch.js";

const newestPostsBtn = document.getElementById("newestPosts");
const updatedPostsBtn = document.getElementById("updatedPosts");
const oldestPostsBtn = document.getElementById("oldestPosts");
const activePostsBtn = document.getElementById("activePosts");

export const filterPosts = (posts) => {
  newestPostsBtn.addEventListener("click", (e) => displayNewestPosts(posts));
  oldestPostsBtn.addEventListener("click", (e) => displayOldestPosts(posts));
  updatedPostsBtn.addEventListener("click", (e) => displayUpdatedPosts(posts));
  activePostsBtn.addEventListener("click", (e) => displayActivePosts());
};

const displayNewestPosts = (posts) => {
  const newestPosts = posts.sort((a, b) => new Date(b.created) - new Date(a.created));
  updatePostsSection();

  renderPosts(newestPosts);
};

const displayOldestPosts = (posts) => {
  const oldestPosts = posts.sort((a, b) => new Date(a.created) - new Date(b.created));
  updatePostsSection();
  renderPosts(oldestPosts);
};

const displayUpdatedPosts = (posts) => {
  const updatedPosts = posts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
  updatePostsSection();
  renderPosts(updatedPosts);
};

const displayActivePosts = async () => {
  const activePosts = await fetchPosts(`&_active=true`);
  updatePostsSection();
  renderPosts(activePosts);
};

import { renderPosts } from "../render/render.js";
import { updatePostsSection } from "./updatePostsContainer.js";
import { apiUrls } from "../api/constant.js";
import { apiCall } from "../api/api.js";

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
  const activePosts = await apiCall(apiUrls.active_Posts_Url, "get");
  console.log(activePosts);
  updatePostsSection();
  renderPosts(activePosts);
};

// const displayUsersByFriends = async () => {
//   try {
//     const users = await apiCall(apiUrls.users_Url, "get");

//     const sortedUsers = users.sort((a, b) => {
//       return b.friends - a.friends;
//     });

//     console.log(sortedUsers);
//   } catch (error) {
//     console.error("Error fetching and sorting users by friends:", error);
//   }
// };

// const displayUsersByPosts = async () => {
//   try {
//     const users = await apiCall(apiUrls.users_Url, "get");

//     users.filter(({ _count }) => {
//       const { posts } = _count;
//       const sortedUsers = posts.sort((a, b) => {
//         return b.posts - a.posts;
//       });

//       return sortedUsers;
//     });

//     console.log(sortedUsers);
//   } catch (error) {
//     console.error("Error fetching and sorting users by posts:", error);
//   }
// };

// displayUsersByPosts();

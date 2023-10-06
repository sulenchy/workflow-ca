import { renderProfile, renderUsers } from "../js/render/render.js";
import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { apiCall } from "../js/api/api.js";
import { renderPosts } from "../js/render/render.js";
import { filterPosts } from "../js/functions/filterFunctionality.js";
import { search } from "../js/functions/searchFunctionality.js";
import { updatePostsSection } from "../js/posts/updatePosts.js";
import { fetchProfile, fetchUserPosts } from "../js/api/getRequests.js";
import { createProfileId } from "../js/functions/getUrlId.js";
import { dynamicH2Change } from "../js/functions/dynamicHeaderChange.js";

const token = fetchLocalStorage("token");
const profileId = createProfileId();

const displayProfile = async (token) => {
  try {
    const profile = await fetchProfile(token, profileId);
    renderProfile(profile);
  } catch (error) {
    console.log(error);
  }
};

const displayUserPosts = async () => {
  try {
    const posts = await fetchUserPosts(token, profileId);
    renderPosts(posts);
    filterPosts(posts);
    search();
    dynamicH2Change(`${profileId}s latest posts:`);
  } catch (error) {
    console.log(error);
  }
};

displayUserPosts(profileId);
displayProfile(token);

const postBtn = document.getElementById("postsBtn");
const followersBtn = document.getElementById("followersBtn");
const followingBtn = document.getElementById("followingBtn");

console.log(postBtn);

//post btn
const upDateFeedContent = (renderFunction, value) => {
  updatePostsSection();
  renderFunction(value);
};

postBtn.addEventListener("click", () => {
  upDateFeedContent(displayUserPosts);
});

//follower btn
const displayFollowers = async (value) => {
  let name = profileId;
  const { followers, following } = await fetchProfile(token, name);
  if (value === "followers") {
    renderUsers(followers);
    dynamicH2Change(`${name}s ${value}:`);
  } else if (value === "following") {
    renderUsers(following);
    dynamicH2Change(`${name}s ${value}:`);
  }
};

followersBtn.addEventListener("click", () => {
  upDateFeedContent(displayFollowers, "followers");
});

followingBtn.addEventListener("click", () => {
  upDateFeedContent(displayFollowers, "following");
});

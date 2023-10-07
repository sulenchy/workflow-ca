import { renderProfile, renderUsers } from "../js/render/render.js";
import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { renderPosts } from "../js/render/render.js";
import { filterPosts } from "../js/functions/filterFunctionality.js";
import { search } from "../js/functions/searchFunctionality.js";
import { updatePostsSection } from "../js/posts/updatePosts.js";
import { getRequest } from "../js/api/get.js";
import { createProfileId } from "../js/functions/getUrlId.js";
import { dynamicH2Change } from "../js/functions/dynamicHeaderChange.js";
import { toggleBtnClass } from "../js/functions/toggleBtnClass.js";
import { changeSearchElements } from "../js/functions/changeSearchElements.js";
import { checkResult } from "../js/functions/resultMsg.js";
import { suggestUsers } from "../js/functions/suggestUsers.js";
import { logOuTbTN } from "../js/profile/logOutBtn.js";
import { apiUrls } from "../js/api/constant.js";

const token = fetchLocalStorage("token");
const profileId = createProfileId();
const postBtn = document.getElementById("postsBtn");
const followersBtn = document.getElementById("followersBtn");
const followingBtn = document.getElementById("followingBtn");

postBtn.addEventListener("click", () => {
  const id = postBtn.id;
  upDateFeedContent(displayUserPosts, undefined, id);
});

followersBtn.addEventListener("click", () => {
  const id = followersBtn.id;
  upDateFeedContent(displayFollowers, "followers", id);
});

followingBtn.addEventListener("click", () => {
  const id = followingBtn.id;
  upDateFeedContent(displayFollowers, "following", id);
});

const displayProfile = async (token) => {
  try {
    const profile = await getRequest(apiUrls.profile_Parameter, token);
    renderProfile(profile);
    logOuTbTN();
  } catch (error) {
    console.log(error);
  }
};

const displayUserPosts = async () => {
  try {
    search();
    dynamicH2Change(`${profileId}s latest posts:`);
    changeSearchElements();

    const posts = await getRequest(apiUrls.profile_Posts_Parameter, token);
    checkResult(posts, `Nothing has been posted yet`);
    renderPosts(posts);
    filterPosts(posts);
  } catch (error) {
    console.log(error);
  }
};
const displayFollowers = async (value) => {
  const { followers, following } = await getRequest(apiUrls.profile_Parameter, token);
  if (value === "followers") {
    checkResult(followers, `You do not have any  followers yet`);
    renderUsers(followers);
    dynamicH2Change(`${profileId}s ${value}:`);
  } else if (value === "following") {
    if (following.length <= 0) {
      suggestUsers();
      return;
    }
    renderUsers(following);
    dynamicH2Change(`${profileId}s ${value}:`);
  }

  changeSearchElements();
};

displayUserPosts(profileId);
displayProfile(token);

const upDateFeedContent = (renderFunction, value, id) => {
  toggleBtnClass(id);
  updatePostsSection();
  renderFunction(value);
};

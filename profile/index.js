import { renderProfile, renderUsers } from "../js/render/render.js";
import { search } from "../js/utils/searchFunctionality.js";
import { updatePostsSection } from "../js/posts/updatePostsContainer.js";
import { getRequest } from "../js/api/get.js";
import { createProfileId } from "../js/utils/queryParam.js";
import { dynamicH2Change } from "../js/utils/dynamicHeaderChange.js";
import { toggleBtnClass } from "../js/utils/toggleBtnClass.js";
import { changeSearchElements } from "../js/utils/changeSearchElements.js";
import { checkResult } from "../js/utils/suggestUsers.js";
import { logOuTbTN } from "../js/utils/logOutBtn.js";
import { apiUrls } from "../js/api/constant.js";
import { displayPosts } from "../js/posts/displayPosts.js";

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

const upDateFeedContent = (renderFunction, value, id) => {
  toggleBtnClass(id);
  renderFunction(value);
  updatePostsSection();
};

const displayProfile = async () => {
  try {
    const profile = await getRequest(apiUrls.profile_Parameter);
    renderProfile(profile);
    logOuTbTN();
  } catch (error) {
    console.log(error);
  }
};

const displayUserPosts = async () => {
  try {
    dynamicH2Change(`${profileId}s latest posts:`);
    changeSearchElements();
    displayPosts(apiUrls.profile_Posts_Parameter);
  } catch (error) {
    console.log(error);
  }
};
const displayFollowers = async (value) => {
  const { followers, following } = await getRequest(apiUrls.profile_Parameter);
  if (value === "followers") {
    checkResult(followers, renderUsers, `do not have any  followers yet`);
  } else if (value === "following") {
    checkResult(following, renderUsers, `do not  follow anybody yet`);
  }
  dynamicH2Change(`${profileId}s ${value}:`);
  changeSearchElements();
};

displayProfile();
displayUserPosts();
search();

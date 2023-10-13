import { apiCall } from "../api/api.js";
import { renderProfile, renderUsers } from "../render/render.js";
import { apiUrls } from "../api/constant.js";
import { editBtn } from "../utils/editBtn.js";
import { createProfileId } from "../utils/queryParam.js";
import { checkResult } from "../users/suggestUsers.js";
import { dynamicH2Change } from "../utils/dynamicHeaderChange.js";
import { changeSearchElements } from "../utils/changeSearchElements.js";
import { followBtnHandler } from "../utils/followBtnHandler.js";

export const displayUserProfile = async () => {
  const profile = await apiCall(apiUrls.profile_Parameter, "get");
  renderProfile(profile);
  editBtn();
  followBtnHandler();
};

export const displayUsers = async () => {
  const users = await apiCall(apiUrls.users_Url, "get");
  renderUsers(users);
};

export const displayFollowers = async (value) => {
  const profileId = createProfileId();
  const { followers, following } = await apiCall(apiUrls.profile_Parameter, "get");
  if (value === "followers") {
    checkResult(followers, renderUsers, `do not have any  followers yet`);
  } else if (value === "following") {
    checkResult(following, renderUsers, `do not  follow anybody yet`);
  }
  dynamicH2Change(`${profileId}s ${value}:`);
  changeSearchElements();
};

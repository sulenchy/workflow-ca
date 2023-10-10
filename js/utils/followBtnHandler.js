import { apiCall } from "../api/api.js";
import { apiUrls } from "../api/constant.js";
import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { createProfileId } from "./queryParam.js";

export const followBtnHandler = () => {
  const btn = document.querySelector(".profile-btn");

  if (btn) {
    checkFollowStatus(btn);
    btn.addEventListener("click", async (e) => {
      await toggleFollowStatus(btn);
    });
  }
};

const fetchFollowers = async (profileName) => {
  const name = fetchLocalStorage("name");

  const { following } = await apiCall(apiUrls.profiles_Url + `/${name}/?_following=true `, "get");

  const foundUser = following.reduce((result, user) => {
    if (user.name === profileName) {
      return user;
    }
    return result;
  }, "");
  return foundUser;
};

const toggleFollowStatus = async (btn) => {
  const profileName = createProfileId();
  const { name } = await fetchFollowers(profileName);

  if (name) {
    await apiCall(apiUrls.profiles_Url + `/${name}/unfollow`, "put", undefined, "noBody");
    btn.innerText = "Unfollow";
  } else {
    await apiCall(apiUrls.profiles_Url + `/${profileName}/follow`, "put", undefined, "noBody");
    btn.innerText = "Follow";
  }
  window.location.reload();
};

const checkFollowStatus = async (btn) => {
  const profileName = createProfileId();
  const name = await fetchFollowers(profileName);
  if (name) {
    btn.innerText = "Unfollow";
  } else {
    btn.innerText = "Follow";
  }
};

import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { apiCall } from "../js/api/api.js";
import { renderProfile } from "../js/render/render.js";

const token = fetchLocalStorage("token");
const name = fetchLocalStorage("name");

const fetchProfile = async (token, name) => {
  const authorization = `bearer ${token}`;
  const profile = await apiCall(`social/profiles/${name}`, "get", undefined, authorization);
  renderProfile(profile);
  console.log(profile);
};

fetchProfile(token, name);

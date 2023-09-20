import { fetchLocalStorage } from "../js/localStorage/localStorage.js";
import { apiCall } from "../js/api/api.js";
import { renderProfile } from "../js/render/render.js";

const token = fetchLocalStorage("token");

const fetchProfile = async (token) => {
  const authorization = `bearer ${token}`;
  const profile = await apiCall("social/profiles/tokle", "get", undefined, authorization);
  renderProfile(profile);
  console.log(profile._count);
};

fetchProfile(token);

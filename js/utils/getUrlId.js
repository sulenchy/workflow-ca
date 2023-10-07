import { fetchLocalStorage } from "../localStorage/localStorage.js";

export const getUrlId = () => {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  return id;
};

export const createProfileId = () => {
  let profileId = ``;
  const id = getUrlId();
  const name = fetchLocalStorage("name");

  if (id) {
    profileId = id;
  } else {
    profileId = name;
  }

  return profileId;
};

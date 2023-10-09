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

export const updateHref = () => {
  const currentURL = window.location.href;
  const updatedURL = removeQueryParam(currentURL, "id");

  window.history.replaceState({}, document.title, updatedURL);
};
const removeQueryParam = (url, param) => {
  const urlParts = url.split("?");
  if (urlParts.length < 2) {
    return url;
  }

  const queryParams = urlParts[1].split("&");
  const updatedParams = queryParams.filter((paramPair) => {
    const [key] = paramPair.split("=");
    return key.toLowerCase() !== param.toLowerCase();
  });

  return updatedParams.length > 0 ? urlParts[0] + "?" + updatedParams.join("&") : urlParts[0]; // Remove '?' if there are no more query parameters
};

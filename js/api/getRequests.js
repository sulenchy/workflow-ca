import { apiCall } from "./api.js";

export const fetchProfile = async (token, name) => {
  const authorization = `bearer ${token}`;
  const profile = await apiCall(`social/profiles/${name}?_followers=true&_following=true`, "get", undefined, authorization);
  return profile;
};

export const fetchUserPosts = async (token, name) => {
  const result = await apiCall(`social/profiles/${name}/posts?_author=true&_comments=true&_reactions=true`, "get", undefined, `bearer ${token}`);
  return result;
};

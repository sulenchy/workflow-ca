import { createProfileInfo } from "./createHtml/createProfile.js";
import { createFeedBtnInfo } from "./createHtml/createProfile.js";
import { createPosts } from "./createHtml/createPosts.js";

export const renderProfile = ({ name, email, avatar, _count }) => {
  createProfileInfo(name, email, avatar);
  createFeedBtnInfo(_count);
};

export const renderPosts = (posts) => {
  posts.forEach(createPosts);
  console.log(posts);
};

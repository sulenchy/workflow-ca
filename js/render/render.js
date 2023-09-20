import { createProfileInfo } from "./createHtml/createProfile.js";
import { followButtons } from "./createHtml/createProfile.js";

export const renderProfile = ({ name, email, avatar, _count }) => {
  createProfileInfo(name, email, avatar);
  followButtons(_count);
};

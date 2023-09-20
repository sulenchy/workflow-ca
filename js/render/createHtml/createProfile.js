import { createElement } from "./createHtmlFunction.js";

const profileInfoContainer = document.getElementById("profile-info");

export const createProfileInfo = (name, email, avatar) => {
  const img = createElement("img", ["me-2", "profile-img"], undefined, undefined, undefined, "../images/profile.jpg", `${name}`);

  if (avatar) {
    img.src = avatar;
  }

  const element = createElement("div");
  const h1 = createElement("h1", ["text-primary", "mb-1"], undefined, name);
  const p = createElement("p", ["mb-1"], undefined, email);
  const button = createElement("button", ["btn", "btn-primary", "text-white", "mt-1"], undefined, "Follow");
  element.append(h1, p, button);

  profileInfoContainer.append(img, element);
};

export const followButtons = ({ followers, following }) => {
  console.log(followers);
};

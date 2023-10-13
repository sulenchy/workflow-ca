import { createElement } from "../render/createHtml/createHtmlFunction.js";
import { createEditModal } from "./editProfileImg.js";
import { getQueryParamId } from "./queryParam.js";

export const editBtn = () => {
  const id = getQueryParamId();

  if (id) {
    return;
  }
  createdEditDropDown();
};

const createdEditDropDown = () => {
  const container = document.querySelector(".profile-btn-container");
  container.innerHTML = "";

  const btn = createEditBtn();
  container.append(btn);
};

const createEditBtn = (id, title, body, media) => {
  const element = createElement("div", ["dropdown"]);

  const btn = createElement("button", ["btn", "text-white", "bg-primary", "border", "border-primary", "dropdown-toggle"], undefined, "Edit");
  btn.setAttribute("data-bs-toggle", "dropdown");

  const firstLi = createElement("li", ["dropdown-item", "text-primary"], undefined, "Log Out");
  firstLi.addEventListener("click", (e) => logOut());

  const secondLi = createElement("li", ["dropdown-item", "text-primary"], undefined, "Edit profile image");
  secondLi.addEventListener("click", (e) => createEditModal());

  const ul = createElement("ul", ["dropdown-menu", "edit-dropdown"], [firstLi, secondLi]);

  element.append(btn, ul);

  return element;
};

const logOut = () => {
  localStorage.removeItem("name", "token");
  window.location.href = `../../index.html`;
};

import { createElement } from "../render/createHtml/createHtmlFunction.js";
import { createEditModal } from "./editProfileImg.js";
import { getQueryParamId } from "./queryParam.js";

/**
 * Conditionally displays an "Edit" button if a user's ID is not provided in the query parameters.
 *
 * This function checks if a user's ID is provided in the query parameters. If an ID is not present, it creates and displays an "Edit" button,  used to edit the user's avatar, or let the user log out.
 *
 * @returns {void}
 *
 * @example
 * // Example usage:
 * editBtn();
 */
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

const createEditBtn = () => {
  const element = createElement("div", ["dropdown"]);

  const btn = createElement(
    "button",
    ["btn", "text-white", "bg-primary", "border", "border-primary", "dropdown-toggle"],
    undefined,
    "Edit"
  );
  btn.setAttribute("data-bs-toggle", "dropdown");

  const firstLi = createElement("li", ["dropdown-item", "text-primary"], undefined, "Log Out");
  firstLi.addEventListener("click", (e) => logOut());

  const secondLi = createElement("li", ["dropdown-item", "text-primary"], undefined, "Edit profile image");
  secondLi.addEventListener("click", (e) => createEditModal());

  const ul = createElement("ul", ["dropdown-menu", "edit-dropdown"], [firstLi, secondLi]);

  element.append(btn, ul);

  return element;
};

const navigateTo = (url) => {
  // This function would replace window.location.href
  // In your tests, you can control its behavior.
  window.location.href = url;
};

/**
 * Logs a user out
 *
 * This function removes the user's name and JWT from local storage and navigates the user to the home page.
 *
 * @example
 * // Example usage:
 * logOut(navigateTo);
 */
const logOut = (navigateTo) => {
  localStorage.removeItem("name");
  console.log("localStorage.removeItem called for 'name'");
  localStorage.removeItem("token");
  console.log("localStorage.removeItem called for 'token'");
  navigateTo("../../index.html");
};

export default logOut;

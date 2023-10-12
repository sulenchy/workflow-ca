import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { createElement } from "../render/createHtml/createHtmlFunction.js";

const feedAnchorTag = document.querySelector(".feed-anchorTag");
const profileAnchorTag = document.querySelector(".profile-anchorTag");
const msgContainer = document.getElementById("msg-container");

export const checkIfLoggedIn = () => {
  const name = fetchLocalStorage("name");

  if (!name) {
    profileAnchorTag.href = "#log-in_section";
    feedAnchorTag.href = "#log-in_section";

    const msg = createElement("p", ["fw-bold", "text-primary", "text-center"], undefined, "You have not logged in yet!");
    msgContainer.append(msg);
  }
};

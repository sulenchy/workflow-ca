import { createElement } from "../render/createHtml/createHtmlFunction.js";
import { changeSearchElements } from "../utils/changeSearchElements.js";
import { displayUsers } from "./displayUsers.js";
import { getQueryParamId } from "../utils/queryParam.js";

export const checkResult = (value, renderFunction, text) => {
  if (value.length <= 0) {
    suggestUsers(text);
    return;
  } else {
    renderFunction(value);
  }
};

export const suggestUsers = async (text) => {
  const container = document.getElementById("posts-container");
  const msg = createMsg(text);
  container.append(msg);
  displayUsers();
  changeSearchElements();
};

const createMsg = (text) => {
  const element = createElement("div");
  const msgName = createTextName();
  const header = createElement("h5", ["text-primary", "text-center", "fw-bold"], undefined, `${msgName} ${text}`);
  const paragraph = createElement("p", ["text-primary", "text-center"], undefined, `Find your new friends below:`);
  element.append(header, paragraph);
  return element;
};

const createTextName = () => {
  const id = getQueryParamId();
  let name = "You";
  if (id) {
    name = id;
  }
  return name;
};

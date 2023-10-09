import { createElement } from "../render/createHtml/createHtmlFunction.js";
import { renderUsers } from "../render/render.js";
import { changeSearchElements } from "./changeSearchElements.js";
import { apiUrls } from "../api/constant.js";
import { getUrlId } from "./queryParam.js";
import { getRequest } from "../api/get.js";

export const checkResult = (value, renderFunction, text) => {
  if (value.length <= 0) {
    suggestUsers(text);
    return;
  } else {
    renderFunction(value);
    console.log("working");
  }
};

export const suggestUsers = async (text) => {
  const container = document.getElementById("posts-container");
  const msg = createMsg(text);
  container.append(msg);
  const users = await getRequest(apiUrls.users_Url);
  renderUsers(users);
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
  const id = getUrlId();
  let name = "You";
  if (id) {
    name = id;
  }
  return name;
};

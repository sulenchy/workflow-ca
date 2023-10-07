import { createElement } from "../render/createHtml/createHtmlFunction.js";
import { renderUsers } from "../render/render.js";
import { changeSearchElements } from "./changeSearchElements.js";
import { apiUrls } from "../api/constant.js";
import { getUrlId } from "./getUrlId.js";
import { getRequest } from "../api/get.js";

export const suggestUsers = async () => {
  const container = document.getElementById("posts-container");
  const msg = createMsg();
  container.append(msg);
  const users = await getRequest(apiUrls.users_Url);
  renderUsers(users);
  changeSearchElements();
};

const createMsg = () => {
  const element = createElement("div");
  const msgName = createTextName();
  const header = createElement("h5", ["text-primary", "text-center", "fw-bold"], undefined, `${msgName} do not follow anybody yet`);
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

import { createElement } from "../render/createHtml/createHtmlFunction.js";

export const checkResult = (value, text) => {
  if (value <= 0) {
    createResultMsg(text);
  }

  return;
};

const createResultMsg = (text) => {
  console.log("working");
  const postContainer = document.getElementById("posts-container");
  const msg = createElement("h5", ["text-primary", "fw-bold", "text-center", "mt-2"], undefined, `${text}`);
  postContainer.append(msg);
};

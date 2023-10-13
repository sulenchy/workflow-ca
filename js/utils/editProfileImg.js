import { apiCall } from "../api/api.js";
import { apiUrls } from "../api/constant.js";
import { createElement } from "../render/createHtml/createHtmlFunction.js";

export const createEditModal = () => {
  const main = document.querySelector("main");

  const element = createElement("div", ["edit-modal", "img-modal", "position-fixed", "bg-white", "p-4"]);

  const dialog = modalDialog();
  element.append(dialog);

  main.append(element);

  const form = document.querySelector(".profile-img_form");
  form.addEventListener("submit", () => handleAvatarSubmit());
};

const modalDialog = () => {
  const element = createElement("div", ["modal-dialog"]);
  const content = modalContent();
  element.append(content);
  return element;
};

const modalContent = () => {
  const element = createElement("div", ["modal-content"]);
  const header = modalHeader();
  const body = modalBody();
  element.append(header, body);
  return element;
};

const modalHeader = () => {
  const element = createElement("div", ["modal-header"]);
  const h5 = createElement("h5", ["modal-title", "text-primary"], undefined, "Paste your img url here:");
  const btn = createElement("button", ["btn-close"]);
  btn.addEventListener("click", () => closeModal());

  element.append(h5, btn);
  return element;
};

const modalBody = () => {
  const element = createElement("form", ["profile-img_form"]);
  element.action = "get";
  const input = createElement("input", ["form-control", "mt-1", "border", "border-dark", "img-input"]);
  element.type = "url";
  element.id = "exampleFormControlInput1";
  element.placeholder = "Paste your img url here";

  const btn = createElement("button", ["btn", "btn-info", "my-2"], undefined, "Post");
  btn.type = "submit";

  element.append(input, btn);
  return element;
};

const handleAvatarSubmit = () => {
  event.preventDefault();
  const [url] = event.target.elements;
  putAvatar(url);
};

const putAvatar = async (url) => {
  try {
    const data = JSON.stringify({
      media: url.value,
    });
    const response = await apiCall(apiUrls.avatar_Url, "put", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const closeModal = () => {
  const modal = document.querySelector(".edit-modal");
  modal.remove();
};

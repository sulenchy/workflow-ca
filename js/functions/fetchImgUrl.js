import { createElement } from "../render/createHtml/createHtmlFunction.js";

export const fetchImgUrl = () => {
  checkImgInput();
};

const renderImgInput = () => {
  const container = document.getElementById("imgUrl-container");
  const input = createImgInput();
  container.append(input);
};

export const createImgInput = () => {
  const element = createElement("input", ["form-control", "mt-1", "border", "border-dark", "img-input"]);
  element.type = "url";
  element.id = "exampleFormControlInput1";
  element.placeholder = "Paste your img url here";

  return element;
};

const checkImgInput = () => {
  const input = document.querySelector(".img-input");

  if (input) {
    removeImgInput(input);
    return;
  }

  renderImgInput();
};

const removeImgInput = (input) => {
  input.remove();
};

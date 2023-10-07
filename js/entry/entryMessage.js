import { createElement } from "../render/createHtml/createHtmlFunction.js";

export const displayMessage = (container, message, color) => {
  const messageContainer = document.querySelector(`.${container}-msg`);
  messageContainer.replaceChildren();
  messageContainer.classList.add("border", `border-${color}`, "p-1");
  const paragraph = createElement("p", ["fw-bold", `text-${color}`, "m-0"], undefined, message);

  messageContainer.appendChild(paragraph);
};

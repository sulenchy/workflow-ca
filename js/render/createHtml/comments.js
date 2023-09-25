import { createElement } from "./createHtmlFunction.js";

export const createCommentsContainer = (id) => {
  const element = createElement("div");
  element.id = id;

  const commentBtn = createElement("button", ["btn", "btn-info", "comment-btn"], undefined, "Comments");
  commentBtn.id = id;

  commentBtn.addEventListener("click", () => {
    displayCommentSection(id);
    commentBtn.style.display = "none";
  });

  element.append(commentBtn);
  return element;
};

export const createCommentForm = () => {
  const element = createElement("form");
  element.action = "get";

  const label = createElement("label", ["form-label", "fs2", "mt-2"], undefined, "Write Comment");
  label.for = "exampleFormControlTextarea1";

  const textArea = createElement("textarea", ["form-control"]);
  textArea.id = "exampleFormControlTextArea1";
  textArea.rows = "3";

  const btn = createElement("button", ["btn", "btn-info"], undefined, "Comment");

  element.append(label, textArea, btn);
  return element;
};

export const displayCommentSection = (id) => {
  const commentContainer = document.getElementById(id);

  const commentForm = createCommentForm();

  commentContainer.append(commentForm);
};

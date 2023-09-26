import { createElement } from "./createHtmlFunction.js";
import { displayCommentsSection } from "../../comments/displayComments.js";

export const createCommentsContainer = (id, comments) => {
  const element = createElement("div");
  element.id = id;

  const commentBtn = createElement("button", ["btn", "btn-info", "comment-btn"], undefined, "Comments");

  commentBtn.addEventListener("click", () => {
    displayCommentsSection(id, comments);
    commentBtn.style.display = "none";
  });

  element.append(commentBtn);
  return element;
};

export const createCommentForm = (id) => {
  const element = createElement("form");
  element.action = "post";
  const label = createElement("label", ["form-label", "fs2", "mt-2"], undefined, "Write Comment");
  label.for = "exampleFormControlTextarea1";

  const textArea = createElement("textarea", ["form-control"]);
  textArea.id = "exampleFormControlTextArea1";
  textArea.rows = "3";

  const btn = createElement("button", ["btn", "btn-info"], undefined, "Comment");
  btn.type = "submit";

  element.append(label, textArea, btn);
  return element;
};

export const createComments = (comments) => {
  const element = createElement("div");
  console.group(comments);

  if (comments > 0) {
    comments.forEach(createComment());
    return;
  }
  const msg = displayCommentMsg();
  element.append(msg);

  return element;
};

const createComment = (comment) => {
  console.log(comment);
};

const displayCommentMsg = () => {
  const element = createElement("div");
  const p = createElement("p", undefined, undefined, "No comments yet");
  element.append(p);
  return element;
};

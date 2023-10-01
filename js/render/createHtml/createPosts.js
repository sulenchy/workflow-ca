import { createElement } from "./createHtmlFunction.js";
import { parseDate } from "../../parse/parse.js";
import { createCommentsContainer } from "./createComments.js";
import { checkEditPost, deletePost } from "../../posts/editPosts.js";

const postContainer = document.getElementById("posts-container");
console.log(postContainer);

export const createPosts = ({ author, title, body, tags, media, created, id, comments }) => {
  const post = createElement("div", ["post", "p-3", "mb-3", "bg-white"]);
  const postAuthor = createPostAuthor(author, id);
  const postContent = createPostContent(title, body, tags, media, created, id, comments);
  post.append(postAuthor, postContent);
  postContainer.append(post);
};

const createPostAuthor = ({ name, avatar }, id) => {
  const element = createElement("div", [
    "d-flex",
    "align-items-center",
    "flex-row-reverse",
    "justify-content-between",
    "pb-2",
    "border-bottom",
    "border-primary",
  ]);
  const div = createElement("div", ["d-flex", "align-items-center"]);
  const img = createElement("img", undefined, undefined, undefined, undefined, name);

  if (avatar) {
    img.src = avatar;
  } else {
    img.src = "../images/profile.jpg";
  }

  const h2 = createElement("h2", ["text-primary", "fs-6", "fw-bold", "ps-2", "pt-2"], undefined, name);
  div.append(img, h2);

  if (checkEditPost(name)) {
    const editBtn = createEditBtn(id);
    element.append(editBtn);
  }

  element.append(div);
  return element;
};

const createPostContent = (title, body, tags, media, created, id, comments) => {
  const element = createElement("div");
  if (media) {
    const img = createElement("img", ["py-2", "post-img"], undefined, undefined, undefined, media);
    element.append(img);
  }

  const headingContainer = createHeadingContainer(title, created);
  const p = createElement("p", ["text-muted"], undefined, body);
  const commentsContainer = createCommentsContainer(id, comments);

  element.append(headingContainer, p, commentsContainer);
  return element;
};

const createHeadingContainer = (title, created) => {
  const element = createElement("div", ["pt-2"]);

  const h2 = createElement("h3", ["fs-6", "fw-bold", "m-0"], undefined, title);
  const date = parseDate(created);
  const createdDate = createElement("p", undefined, undefined, date);

  element.append(h2, createdDate);
  return element;
};

const createEditBtn = (id) => {
  const element = createElement("div", ["dropdown"]);

  const btn = createElement("button", ["btn", "text-primary", "bg-white", "border", "border-primary", "dropdown-toggle"], undefined, "Edit");
  btn.setAttribute("data-bs-toggle", "dropdown");

  const firstLi = createElement("li", ["dropdown-item"], undefined, "delete");
  firstLi.addEventListener("click", (event) => deletePost(id));

  const secondLi = createElement("li", ["dropdown-item"], undefined, "Edit");
  const ul = createElement("ul", ["dropdown-menu", "edit-dropdown"], [firstLi, secondLi]);

  element.append(btn, ul);

  return element;
};

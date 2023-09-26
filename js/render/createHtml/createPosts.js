import { createElement } from "./createHtmlFunction.js";
import { parseDate } from "../../parse/parse.js";
import { createCommentsContainer } from "./comments.js";

const postContainer = document.getElementById("posts-container");
console.log(postContainer);

export const createPosts = ({ author, title, body, tags, media, created, id, comments }) => {
  const post = createElement("div", ["post", "p-3", "mb-3", "bg-white"]);
  const postAuthor = createPostAuthor(author);
  const postContent = createPostContent(title, body, tags, media, created, id, comments);
  post.append(postAuthor, postContent);
  postContainer.append(post);
};

const createPostAuthor = ({ name, avatar }) => {
  const element = createElement("div", ["d-flex", "align-items-center", "pb-2", "border-bottom", "border-primary"]);

  if (avatar) {
    const img = createElement("img", undefined, undefined, undefined, avatar, name);
    element.append(img);
  } else {
    const img = createElement("img", undefined, undefined, undefined, undefined, "../images/profile.jpg", name);
    element.append(img);
  }

  const h2 = createElement("h2", ["text-primary", "fs-6", "fw-bold", "ps-2", "pt-2"], undefined, name);

  element.append(h2);
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

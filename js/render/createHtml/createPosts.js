import { createElement } from "./createHtmlFunction.js";

const postContainer = document.getElementById("posts-container");
console.log(postContainer);

export const createPosts = ({ author, title, body, tags, media, created }) => {
  const post = createElement("div", ["post", "p-3", "mb-3", "bg-white"]);
  const postAuthor = createPostAuthor(author);
  const postContent = createPostContent(title, body, tags, media, created);
  post.append(postAuthor, postContent);
  postContainer.append(post);
};

const createPostAuthor = ({ name, avatar }) => {
  const element = createElement("div", ["d-flex", "align-items-center", "pb-2", "border-bottom", "border-primary"]);

  if (avatar) {
    const img = createElement("img", undefined, undefined, undefined, undefined, avatar, name);
    element.append(img);
  } else {
    const img = createElement("img", undefined, undefined, undefined, undefined, "../images/profile.jpg", name);
    element.append(img);
  }

  const h2 = createElement("h2", ["text-primary", "fs-6", "fw-bold", "ps-2", "pt-2"], undefined, name);

  element.append(h2);
  return element;
};

const createPostContent = (title, body, tags, media, created) => {
  const element = createElement("div");
  if (media) {
    const img = createElement("img", ["p-2"], undefined, undefined, undefined, media);
    element.append(img);
  }

  const h2 = createElement("h3", ["pt-2", "fs-6", "fw-bold"], undefined, title);
  const p = createElement("p", ["text-muted"], undefined, body);
  const commentBtn = createElement("button", ["btn", "btn-info"], undefined, "Comments");
  const commentsContainer = createElement("div", undefined, [commentBtn]);

  element.append(h2, p, commentsContainer);
  return element;
};

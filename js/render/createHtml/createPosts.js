import { createElement } from "./createHtmlFunction.js";

const postContainer = document.getElementById("posts-container");
console.log(postContainer);

export const createPosts = (posts) => {
  const { author } = posts;
  const post = createElement("div", ["post", "p-3", "mb-3", "bg-white"]);
  const authorContainer = createPostAuthor(author);

  post.append(authorContainer);
  postContainer.append(post);
};

const createPostAuthor = ({ name, avatar }) => {
  const element = createElement("div", ["d-flex", "align-items-center", "pb-2", "border-bottom", "border-primary"]);

  if (avatar) {
    const img = createElement("img", undefined, undefined, undefined, undefined, avatar, name);
    element.append(img);
  }

  const h2 = createElement("h2", ["text-primary", "fs-6", "fw-bold", "ps-2", "pt-2"], undefined, name);

  element.append(h2);
  return element;
};

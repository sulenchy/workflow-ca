import { renderPosts } from "../render/render.js";
import { updatePostsSection } from "../posts/updatePosts.js";

const searchForm = document.getElementById("search");
const searchParameter = document.getElementById("searchParameter");

export const search = (posts) => {
  searchForm.addEventListener("input", () => {
    const value = searchForm.children[0].value;
    filterPosts(posts, value);
  });
};

const filterPosts = (posts, value) => {
  console.log(value);

  const filteredPosts = posts.filter(({ title }) => {
    const stringifiedTitle = title.toString();
    return stringifiedTitle.toLowerCase().startsWith(value.toLowerCase());
  });
  updatePostsSection();
  renderPosts(filteredPosts);
};

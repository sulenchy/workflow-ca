import { renderPosts } from "../render/render.js";
import { updatePostsSection } from "./updatePostsContainer.js";
import { renderUsers } from "../render/render.js";
import { apiUrls } from "../api/constant.js";
import { apiCall } from "../api/api.js";
import { changeSearchElements } from "./changeSearchElements.js";

const searchForm = document.getElementById("search");
const searchParameter = document.getElementById("searchParameter");
const optionPostsBtn = document.getElementById("option-posts");
const optionUsersBtn = document.getElementById("option-users");

export const search = () => {
  searchForm.addEventListener("input", () => {
    const value = searchForm.children[0].value;
    const parameter = searchParameter.value;

    if (parameter === "Posts") {
      filterPosts(value);
    } else {
      filterUsers(value);
    }
  });
};

const filterPosts = async (value) => {
  const posts = await apiCall(apiUrls.posts_Parameter, "get");

  const filteredPosts = posts.filter(({ title }) => {
    const stringifiedTitle = title.toString();
    return stringifiedTitle.toLowerCase().startsWith(value.toLowerCase());
  });
  updatePostsSection();
  renderPosts(filteredPosts);
};

const filterUsers = async (value) => {
  const users = await apiCall(apiUrls.users_Url, "get");

  const filteredUsers = users.filter(({ name }) => {
    const stringifiedName = name.toString();
    return stringifiedName.toLowerCase().startsWith(value.toLowerCase());
  });

  updatePostsSection();
  renderUsers(filteredUsers);
};

optionPostsBtn.addEventListener("click", () => renderOptions(apiUrls.posts_Parameter, renderPosts));
optionUsersBtn.addEventListener("click", () => renderOptions(apiUrls.users_Url, renderUsers));

const renderOptions = async (url, renderFunction) => {
  const result = await apiCall(url, "get");
  updatePostsSection();
  renderFunction(result);
  changeSearchElements();
};

import { toggleLoader } from "./spinner.js";
import { updatePostsSection } from "./updatePostsContainer.js";

export const feedBtnHandler = (renderFunction, value, id) => {
  toggleBtnClass(id);
  renderFunction(value);
  updatePostsSection();
  toggleLoader("on");
};

const toggleBtnClass = (id) => {
  const btnContainer = document.getElementById("feed-btn-container");
  const btnArray = Object.values(btnContainer.children);
  btnArray.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

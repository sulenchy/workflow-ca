import { getQueryParamId } from "./queryParam.js";

export const logOuTbTN = () => {
  const id = getQueryParamId();

  if (id) {
    return;
  }
  createLogOutBtn();
};

const createLogOutBtn = () => {
  const btn = document.querySelector(".profile-btn");
  btn.classList.remove("btn-primary", "profile-btn");
  btn.classList.add("btn-info");
  btn.innerText = "Log Out";

  btn.addEventListener("click", () => {
    logOut();
  });
};

const logOut = () => {
  localStorage.removeItem("name", "token");
  window.location.href = `../../index.html`;
};

import { getUrlId } from "../functions/getUrlId.js";

export const logOuTbTN = () => {
  const id = getUrlId();

  if (id) {
    return;
  }
  createLogOutBtn();
};

const createLogOutBtn = () => {
  const btn = document.querySelector(".profile-btn");
  btn.classList.remove("btn-primary");
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

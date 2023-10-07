import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { createLoginModal } from "../render/createHtml/loginModal.js";

export const loginWall = () => {
  const name = fetchLocalStorage("name");
  if (name) {
    console.log("login");
    return;
  }

  createLoginModal();
};

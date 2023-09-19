import { apiCall } from "../api/api.js";
import { displayMessage } from "./entryMessage.js";
import { setLocalStorage } from "../localStorage/localStorage.js";

export const loginUser = async (email, password) => {
  const data = JSON.stringify({
    email: email.value,
    password: password.value,
  });
  const { accessToken } = await apiCall("social/auth/login", "post", data);

  if (!accessToken) {
    displayMessage("login", "Wrong username or password", "danger");
    return;
  }
  setLocalStorage("token", accessToken);
  window.location.replace("../../profile/index.html");
};

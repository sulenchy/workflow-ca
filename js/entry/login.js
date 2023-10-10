import { displayMessage } from "./entryMessage.js";
import { setLocalStorage } from "../localStorage/localStorage.js";
import { apiUrls } from "../api/constant.js";
import { apiCall } from "../api/api.js";

export const loginUser = async (email, password) => {
  const data = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  const { accessToken, name } = await apiCall(apiUrls.login_Url, "post", data);

  if (!accessToken) {
    displayMessage("login", "Wrong username or password", "danger");
    return;
  }
  setLocalStorage("token", accessToken);
  setLocalStorage("name", name);
  window.location.replace("../../profile/index.html");
};

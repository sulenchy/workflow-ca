import { apiCall } from "../api/api.js";
import { displayMessage } from "./entryMessage.js";

export const registerUser = async (userName, email, password) => {
  const data = JSON.stringify({
    name: userName.value,
    email: email.value,
    password: password.value,
  });

  const { status, errors } = await apiCall("social/auth/register", "post", data);

  if (status == "Bad Request") {
    errors.filter(({ message }) => displayMessage("register", message, "danger"));
    return;
  }
  displayMessage("register", `Register was successful, please log in with your new account.`, "success");
};

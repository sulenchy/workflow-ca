import { apiCall } from "../api/api.js";

export const registerUser = (userName, email, password) => {
  const data = JSON.stringify({
    name: userName.value,
    email: email.value,
    password: password.value,
  });
  apiCall("social/auth/register", "post", data);
};

import { apiCall } from "../api/api.js";

export const registerUser = async (userName, email, password) => {
  const data = JSON.stringify({
    name: userName.value,
    email: email.value,
    password: password.value,
  });

  const response = await apiCall("social/auth/register", "post", data, true);
  const { status, errors } = response;

  if (status == "Bad Request") {
    entryError(errors);
  }
};

const entryError = (result) => {
  console.log(result);
  result.filter(({ message }) => console.log(message));
};

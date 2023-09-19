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
  } else {
    displayMessage(`Register successful, please log in with your new account.`, "success");
  }
};

const entryError = (result) => {
  console.log(result);
  result.filter(({ message }) => displayMessage(message, "danger"));
};

const displayMessage = (message, Color) => {
  const messageContainer = document.querySelector(".msg-container");
  messageContainer.replaceChildren();
  messageContainer.classList.add("border", `border-${Color}`);
  const p = document.createElement("p");
  p.innerText = message;
  p.classList.add("fw-bold", `text-${Color}`);

  messageContainer.appendChild(p);
  console.log(messageContainer);
  console.log(message);
};

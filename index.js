import { apiCall } from "./js/api/api.js";

const logIn = document.getElementById("log-in");
const register = document.getElementById("register");

register.addEventListener("submit", (event) => {
  event.preventDefault();
  const [userName, email, password] = event.target.elements;
  registerUser(userName, email, password);
});

const registerUser = (userName, email, password) => {
  const data = JSON.stringify({
    name: userName.value,
    email: email.value,
    password: password.value,
  });
  console.log(data);
};

const testApi = async () => {
  const result = await apiCall("jokes/1", "get");
  console.log(result);
};

testApi();

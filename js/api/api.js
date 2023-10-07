import { fetchLocalStorage } from "../localStorage/localStorage.js";

const token = fetchLocalStorage("token");

export const apiCall = async (url, method, data) => {
  const authorization = ` bearer ${token}`;

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-type": "application/json",
        Authorization: authorization,
      },
      body: data,
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

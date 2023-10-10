import { fetchLocalStorage } from "../localStorage/localStorage.js";

const token = fetchLocalStorage("token");

export const apiCall = async (url, method, data, noBody) => {
  const authorization = ` bearer ${token}`;

  const fetchOptions = {
    method: method,

    headers: {
      "Content-type": "application/json",
      Authorization: authorization,
    },

    body: data,
  };

  if (noBody) {
    delete fetchOptions.headers["Content-type"];
  }

  try {
    const response = await fetch(url, fetchOptions);

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

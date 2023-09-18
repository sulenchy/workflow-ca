import { baseUrl } from "./constant.js";

export const apiCall = async (url, method, data, returnResult) => {
  try {
    const newUrl = baseUrl + url;

    const response = await fetch(newUrl, {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    console.log(response);
    const result = await response.json();

    if (returnResult === true) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

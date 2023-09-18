import { baseUrl } from "./constant.js";

export const apiCall = async (url, method, data) => {
  try {
    const newUrl = baseUrl + url;
    const response = await fetch(newUrl, {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    const result = await response.json();

    if ((method = "get")) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

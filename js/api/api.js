import { baseUrl } from "./constant.js";

export const apiCall = async (url, method, data, authorization) => {
  try {
    const newUrl = baseUrl + url;

    const response = await fetch(newUrl, {
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

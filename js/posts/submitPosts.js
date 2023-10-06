import { apiCall } from "../api/api.js";
import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { updatePostsSection } from "./updatePosts.js";

export const HandleSubmitPost = (event) => {
  event.preventDefault();

  const [title, body, url] = event.target.elements;
  submitPost(title, body, url);
};

const submitPost = async (title, body, media) => {
  try {
    const data = JSON.stringify({
      title: title.value,
      body: body.value,
      media: media.value,
    });
    const token = fetchLocalStorage("token");
    apiCall("social/posts", "post", data, `bearer ${token}`);
    updatePostsSection("post");
  } catch (error) {
    console.log(error);
  }
};

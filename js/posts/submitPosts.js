import { updatePostsSection } from "./updatePosts.js";
import { postRequest } from "../api/post.js";
import { apiUrls } from "../api/constant.js";

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

    postRequest(apiUrls.posts_Url, data);
    updatePostsSection("posts", apiUrls.posts_Parameter);
  } catch (error) {
    console.log(error);
  }
};

import { updatePostsSection } from "../utils/updatePostsContainer.js";
import { apiUrls } from "../api/constant.js";
import { apiCall } from "../api/api.js";

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
    const { errors } = await apiCall(apiUrls.posts_Url, "post", data);
    if (errors) {
      console.log(errors);
      alert(`Ops something went wrong :(    ${errors[0].message} `);
    }
    updatePostsSection("posts", apiUrls.posts_Parameter);
  } catch (error) {
    console.log(error);
  }
};

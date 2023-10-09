import { fetchLocalStorage } from "../../localStorage/localStorage.js";
import { apiCall } from "../../api/api.js";

export const handleCommentSubmit = (id) => {
  event.preventDefault();

  const [comment] = event.target.elements;
  postComment(id, comment);
};

const postComment = async (id, comment) => {
  const token = fetchLocalStorage("token");
  try {
    const data = JSON.stringify({
      body: comment.value,
    });

    const result = await apiCall(`social/posts/${id}/comment`, "post", data, `bearer ${token}`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

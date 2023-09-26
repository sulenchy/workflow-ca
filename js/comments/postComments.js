import { apiCall } from "../api/api.js";

export const handleCommentSubmit = (id) => {
  event.preventDefault();

  const [comment] = event.target.elements;
  postComment(id, comment);
};

const postComment = async (id, comment) => {
  const data = JSON.stringify({
    comment: comment.value,
  });

  console.log(id);
};

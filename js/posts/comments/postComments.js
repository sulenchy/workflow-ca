import { fetchLocalStorage } from "../../localStorage/localStorage.js";
import { apiCall } from "../../api/api.js";

/**
 * Handles the submission of a comment form for a specific post.
 *
 * This function is  called when a user submits a comment form associated with a post. It prevents the default form submission behavior, extracts the comment text from the form input, and then calls a function to post the comment for the specified post ID.
 *
 * @param {string} id - The ID of the post to which the comment belongs.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * const postId = "examplePostId";
 * handleCommentSubmit(postId);
 */

export const handleCommentSubmit = (id) => {
  event.preventDefault();

  const [comment] = event.target.elements;
  postComment(id, comment);
};

/**
 * Takes the comment a user has submitted, stringifies if into a value, with the key "body". And  sends it to a server trough a put request using the apiCall function
 *
 * If the put request fails, alerts the user with a message.
 *
 * @param {number} id - The id belonging to the post the user has commented
 * @param {HTMLInputElement} comment - The input element containing a user`s comment about a post
 */

const postComment = async (id, comment) => {
  const token = fetchLocalStorage("token");
  try {
    const data = JSON.stringify({
      body: comment.value,
    });

    apiCall(`social/posts/${id}/comment`, "post", data, `bearer ${token}`);
  } catch (error) {
    console.log(error);
    alert("Ups something went wrong");
  }
};

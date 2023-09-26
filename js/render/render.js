import { createProfileInfo, createFeedBtnInfo } from "./createHtml/createProfile.js";
import { createPosts } from "./createHtml/createPosts.js";
import { createCommentForm, createComments } from "./createHtml/comments.js";
import { handleCommentSubmit } from "../comments/postComments.js";

export const renderProfile = ({ name, email, avatar, _count }) => {
  createProfileInfo(name, email, avatar);
  createFeedBtnInfo(_count);
};

export const renderPosts = (posts) => {
  posts.forEach(createPosts);
  console.log(posts);
};

export const renderCommentSection = (id, comments) => {
  const commentContainer = document.getElementById(id);

  const commentForm = createCommentForm(id);
  const userComments = createComments(comments);

  commentForm.addEventListener("submit", (event) => handleCommentSubmit(id));

  commentContainer.append(commentForm, userComments);
};

import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { updatePostsSection } from "./updatePosts.js";
import { createEditModal } from "../render/createHtml/createEditModal.js";

const token = fetchLocalStorage("token");

export const checkEditPost = (author) => {
  const name = fetchLocalStorage("name");

  if (author === name) {
    return true;
  }
};

export const deletePost = async (id) => {
  apiCall(`social/posts/${id}`, "delete", undefined, `bearer ${token}`);
  updatePostsSection();
};

export const editPost = (id, title, body, media) => {
  const form = createEditModal(title, body, media);
  form.addEventListener("submit", (e) => handlePutPost(id));
};

const handlePutPost = (id) => {
  event.preventDefault();
  const [title, body, media] = event.target.elements;
  putPost(id, title, body, media);
};

const putPost = async (id, title, body, media) => {
  try {
    const data = JSON.stringify({
      title: title.value,
      body: body.value,
      media: media.value,
    });

    const response = await apiCall(`social/posts/${id}as`, "put", data, `bearer 5454`);

    if (response.ok) {
      console.log(response);
    }

    closeModal();
    updatePostsSection();
  } catch (error) {
    console.log(error);
  }
};

const closeModal = () => {
  const modal = document.querySelector(".edit-modal");
  modal.remove();
};

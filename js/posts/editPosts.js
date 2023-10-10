import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { updatePostsSection } from "../utils/updatePostsContainer.js";
import { createEditModal } from "../render/createHtml/createEditModal.js";
import { apiUrls } from "../api/constant.js";

export const checkEditPost = (author) => {
  const name = fetchLocalStorage("name");

  if (author === name) {
    return true;
  }
};

export const deletePost = async (id) => {
  apiCall(`${apiUrls.posts_Url}/${id}`, "delete");

  updateCurrentPage();
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

    const { errors } = await apiCall(apiUrls.posts_Url + `/${id}`, "put", data);
    if (errors) {
      closeModal();
      alert(`Ups, something went wrong 
      ${errors[0].message}`);
    }

    closeModal();

    updateCurrentPage();
  } catch (error) {
    console.log(error);
  }
};

const closeModal = () => {
  const modal = document.querySelector(".edit-modal");
  modal.remove();
};

const updateCurrentPage = () => {
  const currentPage = location.href;
  if (currentPage.match(`/feed/`)) {
    updatePostsSection("posts", apiUrls.posts_Parameter);
  } else if (currentPage.match(`/profile/`)) {
    updatePostsSection("posts", apiUrls.profile_Posts_Parameter);
  }
};

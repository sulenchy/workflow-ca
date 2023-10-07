import { fetchLocalStorage } from "../localStorage/localStorage.js";
import { apiCall } from "../api/api.js";
import { updatePostsSection } from "./updatePosts.js";
import { createEditModal } from "../render/createHtml/createEditModal.js";
import { deleteRequest } from "../api/delete.js";
import { apiUrls } from "../api/constant.js";

export const checkEditPost = (author) => {
  const name = fetchLocalStorage("name");

  if (author === name) {
    return true;
  }
};

export const deletePost = async (id) => {
  const currentPage = location.href;

  deleteRequest(`${apiUrls.posts_Url}/${id}`, "delete");

  if (currentPage.match(`/feed/`)) {
    updatePostsSection("posts", apiUrls.posts_Parameter);
  } else if (currentPage.match(`/profile/`)) {
    updatePostsSection("posts", apiUrls.profile_Posts_Parameter);
  }
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
    updatePostsSection("posts");
  } catch (error) {
    console.log(error);
  }
};

const closeModal = () => {
  const modal = document.querySelector(".edit-modal");
  modal.remove();
};

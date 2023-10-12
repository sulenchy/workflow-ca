export const changeSearchElements = () => {
  const userContainer = document.getElementById("userCardsContainer");
  const postDropdown = document.getElementById("post-dropdown");

  if (userContainer) {
    postDropdown.style.display = "none";
  } else {
    postDropdown.style.display = "block";
  }
};

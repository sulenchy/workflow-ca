export const changeSearchElements = () => {
  const userContainer = document.getElementById("userCardsContainer");
  const postDropdown = document.getElementById("post-dropdown");
  const userDropdown = document.getElementById("user-dropdown");
  const searchParameter = document.getElementById("searchParameter");

  if (userContainer) {
    postDropdown.style.display = "none";
    userDropdown.classList.remove("d-none");
    searchParameter.children[1].selected = "selected";
    searchParameter.children[0].selected = "";
  } else {
    postDropdown.style.display = "block";
    userDropdown.classList.add("d-none");
    searchParameter.children[0].selected = "selected";
    searchParameter.children[1].selected = "";
  }
};

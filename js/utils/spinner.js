export const toggleLoader = (value) => {
  const loader = document.querySelector(".spinner-container");
  if (value) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};

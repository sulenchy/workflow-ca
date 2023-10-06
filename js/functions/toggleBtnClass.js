export const toggleBtnClass = () => {
  const btnContainer = document.getElementById("feed-btn-container");
  const btnArray = Object.values(btnContainer.children);
  console.log(btnArray);
  btnArray.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    } else {
      btn.classList.add("active");
    }
  });
};

export const toggleBtnClass = (id) => {
  const btnContainer = document.getElementById("feed-btn-container");
  const btnArray = Object.values(btnContainer.children);
  btnArray.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

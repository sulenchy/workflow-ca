export const displayMessage = (container, message, Color) => {
  const messageContainer = document.querySelector(`.${container}-msg`);
  messageContainer.replaceChildren();
  messageContainer.classList.add("border", `border-${Color}`, "p-1");
  const p = document.createElement("p");
  p.innerText = message;
  p.classList.add("fw-bold", `text-${Color}`, "m-0");

  messageContainer.appendChild(p);
  console.log(messageContainer);
  console.log(message);
};

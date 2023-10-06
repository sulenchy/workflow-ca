export const dynamicH2Change = (value) => {
  const h2 = document.getElementById("profileH2");
  const upperCaseValue = value.charAt(0).toUpperCase() + value.slice(1);
  h2.innerText = upperCaseValue;
};

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
    const inputValue = inputName.value.trim();
    inputValue === "" ? outputName.textContent = "Anonymous" : outputName.textContent = inputValue;
  });
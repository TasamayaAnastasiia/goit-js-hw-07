const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const bodyElement = document.querySelector("body");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
changeColorButton.addEventListener("click", (e) => { 
    let colorBody = getRandomHexColor();
    bodyElement.style.backgroundColor = colorBody;
    colorSpan.textContent = colorBody;
 });
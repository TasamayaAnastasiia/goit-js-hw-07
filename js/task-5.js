let buttonChange = document.querySelector(".change-color");
let textColor = document.querySelector(".color");
let bodyStart = document.querySelector("body");
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
buttonChange.addEventListener("click", (e) => { 
    let colorBody = getRandomHexColor();
    bodyStart.style.backgroundColor = colorBody;
    textColor.textContent = colorBody;
 });
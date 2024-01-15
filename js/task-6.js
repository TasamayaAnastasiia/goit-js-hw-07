const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxStart = document.querySelector("#boxes");

function getRandomHexColor() {               /*random color*/
    return `#${Math.floor(Math.random() * 16777215) 
      .toString(16)
      .padStart(6, 0)}`;
  }

createButton.addEventListener("click", function createBoxes(amount) {

   amount = Number(input.value);                    /* saving amount new boxes*/
   boxStart.innerHTML = '';                 /* removing every new creting box, if it is a new click*/

   if ( amount >= 1 && amount <= 100) {     /* checking a number in field*/

for( let j = 0; j < amount; j++) {

        let divNew = document.createElement("div");                    /* creating an element*/ 
        boxStart.append(divNew);    
        divNew.classList.add('box');                                   /* adding this element in DOM*/
        divNew.style.backgroundColor = getRandomHexColor();
        input.value = "";                                             /* removing input number*/

        let size = 30 + j * 10;                                       /* new size for box after new loop*/
        divNew.style.width = size + "px";
        divNew.style.height = size + "px";
    }
}

    else {
        return 0;
    }
})

///////////// destroy boxes//////////////

destroyButton.addEventListener("click", function destroyBoxes() {

    boxStart.innerHTML = '';
 
})
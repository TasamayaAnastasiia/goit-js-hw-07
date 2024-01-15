let lengthCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${lengthCategories}`);

let listCategories = document.querySelectorAll("h2");

let listOptions = document.querySelectorAll("ul");
listOptions.forEach((list) => {
    list.classList.add("list-one");
  });
  
let elementsOfList =  document.querySelectorAll("h2 + ul li");
elementsOfList.forEach((list) => {
    list.classList.add("option-list");
  });

listCategories.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`); 
});



const lengthCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${lengthCategories}`);

const categoryTitles = document.querySelectorAll("h2");
const listOptions = document.querySelectorAll("ul");
listOptions.forEach((list) => {
    list.classList.add("list-one");
  });
  
const elementsOfList =  document.querySelectorAll("h2 + ul li");
elementsOfList.forEach((list) => {
    list.classList.add("option-list");
  });

  categoryTitles.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`); 
});



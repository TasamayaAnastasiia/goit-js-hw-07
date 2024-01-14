let lengthCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${lengthCategories}`);

let listCategories = document.querySelectorAll("h2");

listCategories.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`); 
});



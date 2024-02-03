const list = document.querySelector("#categories");
const categories = [...list.children];
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach(item => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`)
// });

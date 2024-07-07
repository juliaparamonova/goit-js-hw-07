// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// const searchLi = document.querySelectorAll("#categories li").length;

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName} Elements: ${categoryElements}`);
});
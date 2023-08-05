const categoriesList = document.querySelectorAll("ul#categories li.item");

const numberOfCategories = categoriesList.length;
console.log("Number of categories:", numberOfCategories);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

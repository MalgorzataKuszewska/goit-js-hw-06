const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

const liElements = [];

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.textContent = ingredient;

  liElement.classList.add("item");

  liElements.push(liElement);
});

ingredientsList.append(...liElements);

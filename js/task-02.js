const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIngredientsItem = (items) => {
  const ingredientsList = document.querySelector("#ingredients");
  const ingredientItems = [];
  items.forEach((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add("item");
    ingredientItems.push(ingredientItem);
  });
  ingredientsList.append(...ingredientItems);
};
createIngredientsItem(ingredients);

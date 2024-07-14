// State variables
let recipes = [
  {
    name: "Pancakes",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "1/2 teaspoon salt",
      "1 cup milk",
      "1 egg",
      "2 tablespoons melted butter"
    ],
    instructions: [
      "In a large bowl, mix flour, sugar, baking powder, and salt.",
      "In another bowl, whisk milk, egg, and melted butter.",
      "Pour the wet ingredients into the dry ingredients and stir until combined.",
      "Heat a griddle or frying pan over medium heat and lightly grease it.",
      "Pour batter onto the griddle and cook until bubbles form on the surface. Flip and cook until golden brown.",
      "Serve with syrup and your favorite toppings."
    ]
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: [
      "2 slices of bread",
      "2 slices of cheese",
      "2 tablespoons butter"
    ],
    instructions: [
      "Butter one side of each slice of bread.",
      "Place one slice of bread, buttered side down, on a skillet over medium heat.",
      "Top with cheese slices and the second slice of bread, buttered side up.",
      "Cook until the bread is golden brown and the cheese is melted, flipping once.",
      "Serve hot."
    ]
  },
  {
    name: "Spaghetti Bolognese",
    ingredients: [
      "200g spaghetti",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "400g ground beef",
      "400g canned tomatoes",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste",
      "Grated Parmesan cheese (optional)"
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "Heat olive oil in a large pan over medium heat. Add onion and garlic, and cook until softened.",
      "Add ground beef and cook until browned.",
      "Add canned tomatoes, tomato paste, oregano, salt, and pepper. Simmer for 20 minutes.",
      "Serve the sauce over the spaghetti and top with grated Parmesan cheese if desired."
    ]
  },
  {
    name: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup unsalted butter, softened",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 eggs",
      "2 teaspoons vanilla extract",
      "1 teaspoon baking soda",
      "2 teaspoons hot water",
      "1/2 teaspoon salt",
      "3 cups all-purpose flour",
      "2 cups semisweet chocolate chips",
      "1 cup chopped walnuts (optional)"
    ],
    instructions: [
      "Preheat oven to 350 degrees F (175 degrees C).",
      "Cream together the butter, white sugar, and brown sugar until smooth.",
      "Beat in the eggs one at a time, then stir in the vanilla.",
      "Dissolve baking soda in hot water. Add to batter along with salt.",
      "Stir in flour, chocolate chips, and nuts.",
      "Drop by large spoonfuls onto ungreased pans.",
      "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
    ]
  }
];

function editRecipe(index) {
  const editForm = document.getElementById(`edit-form-${index}`);
  const editButton = document.getElementById(`edit-button-${index}`);

  if (editForm.style.display === "none" || editForm.style.display === "") {
    // Show edit form
    editForm.style.display = "block";
    editButton.textContent = "Cancel";
  } else {
    // Hide edit form
    editForm.style.display = "none";
    editButton.textContent = "Edit";
  }
}

function displayRecipes() {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const recipeHTML = `
      <div class="meal" id="${recipe.name.replace(/\s+/g, '-').toLowerCase()}">
        <h2>${recipe.name}</h2>
        <h4>Ingredients:</h4>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h4>Instructions:</h4>
        <ol>
          ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join("")}
        </ol>
        <button id="edit-button-${index}" class="edit-button" onclick="editRecipe(${index})">Edit</button>
        <div id="edit-form-${index}" class="edit-form" style="display: none;">
          <input id="name-input-${index}" type="text" value="${recipe.name}">
          <textarea id="ingredients-input-${index}">${recipe.ingredients.join("\n")}</textarea>
          <textarea id="instructions-input-${index}">${recipe.instructions.join("\n")}</textarea>
          <button class="save-button" onclick="saveRecipe(${index})">Save</button>
        </div>
      </div>
    `;
    recipeList.innerHTML += recipeHTML;
  });
}

function saveRecipe(index) {
  const nameInput = document.getElementById(`name-input-${index}`);
  const ingredientsInput = document.getElementById(`ingredients-input-${index}`);
  const instructionsInput = document.getElementById(`instructions-input-${index}`);

  recipes[index].name = nameInput.value;
  recipes[index].ingredients = ingredientsInput.value.split("\n");
  recipes[index].instructions = instructionsInput.value.split("\n");

  // Hide edit form after saving
  const editForm = document.getElementById(`edit-form-${index}`);
  const editButton = document.getElementById(`edit-button-${index}`);
  editForm.style.display = "none";
  editButton.textContent = "Edit";

  displayRecipes();
}

// Initial display of recipes
displayRecipes();

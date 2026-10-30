// Get DOM element references
const statusMessage = document.getElementById("status-message");
const recipesGrid = document.getElementById("recipes-grid");

// API Endpoint URL
const apiUrl = "https://dummyjson.com/recipes";

// Async function to request and display recipes data
async function fetchRecipes() {
    try {
        // Show running loading message
        statusMessage.textContent = "Loading recipes... Please wait.";
        statusMessage.style.color = "#7f8c8d";

        // fetch request
        const response = await fetch(apiUrl);

        // Display status code to the user
        statusMessage.textContent = `HTTP Status Code: ${response.status} - Processing data...`;

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`Server returned an error status code (${response.status}).`);
        }

        // convert response body into JSON format
        const data = await response.json();
        const recipesList = data.recipes;

        // Verify that we received an array with items inside it
        if (!recipesList || recipesList.length === 0) {
            statusMessage.textContent = `HTTP Status: ${response.status} | No recipes found in the database.`;
            return;
        }

        // Update the status banner to show everything loaded correctly
        statusMessage.textContent = `HTTP Status: ${response.status} | Successfully discovered ${recipesList.length} recipes!`;
        statusMessage.style.color = "#27ae60";

        // create recipe card for each recipe
        recipesList.forEach(recipe => {
            createRecipeCard(recipe);
        });

    } catch (error) {
        console.error("Fetch Operation Failed: ", error);
        statusMessage.textContent = `Error: Could not retrieve recipes. Reason: ${error.message}`;
        statusMessage.style.color = "#c0392b";
    }
}

// dynamically creating html for recipe card
function createRecipeCard(recipe) {
    // Construct individual main card structural node
    const card = document.createElement("div");
    card.className = "recipe-card";

    // Build card structure template string cleanly mapping fallback properties
    card.innerHTML = `
        <img class="recipe-image" src="${recipe.image || 'https://placeholder.com'}" alt="${recipe.name}">
        <div class="recipe-info">
            <h3 class="recipe-name">${recipe.name}</h3>
            <p class="recipe-details"><strong>Cuisine:</strong> ${recipe.cuisine || "Unknown"}</p>
            <p class="recipe-details"><strong>Prep Time:</strong> ${recipe.prepTimeMinutes ? recipe.prepTimeMinutes + " mins" : "N/A"}</p>
            
            <!-- Target list to slide / show ingredient metrics inside -->
            <div class="ingredients-panel" style="display: none;">
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <button class="toggle-btn">View Ingredients</button>
        </div>
    `;

   
    const toggleButton = card.querySelector(".toggle-btn");
    const ingredientsPanel = card.querySelector(".ingredients-panel");

    // Add interactivity to open or close our internal details box layout
    toggleButton.addEventListener("click", () => {
        if (ingredientsPanel.style.display === "none") {
            ingredientsPanel.style.display = "block";
            toggleButton.textContent = "Hide Ingredients";
            toggleButton.style.backgroundColor = "#e67e22"; 
        } else {
            ingredientsPanel.style.display = "none";
            toggleButton.textContent = "View Ingredients";
            toggleButton.style.backgroundColor = "#3498db"; 
        }
    });

    // Append our built card into our container grid
    recipesGrid.appendChild(card);
}

// Run our fetch logic immediately when the browser script initializes
fetchRecipes();


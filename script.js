// List of dinner options
const dinners = [
    "Loaded house soup",
    "Simple soup",
    "Dads spaghetti",
    "Pad kra pow",
    "Pan fry dumplings",
    "Pan fry buns",
    "Soy garlic salmon",
    "Costco meal kit",
    "Curry",
    "Something grilled",
    "Chicken noodle soup",
    "Sinigang",
    "Salmon chowder",
    "Salmon wellington",
    "Spring roll ensemble",
    "Taco ensemble",
    "char siu (needs 6 hrs marinate)",
    "Fish tofu claypot",
    "Tuna salad sandwiches",
    "Hot and sour soup",
    "Korean marinated eggs",
    "Korean marinated broccoli",
    "Taro balls (long prep time)",
    "Egg drop soup",
    "Oven roasted veggies",
    "Yakisoba",
    "Hot and sour soup",
    "Okonomiyaki",
    "Italian wedding soup",
    "Tofegg",
    "Longsilog",
    "Miso black cod (long prep time)",
    "Seared scallops",
    "Jalepeno mochi cornbread",
    "Dokboki w/ fishcake",
    "Porrige",
    "Century Tofu salad",
    "Fried lumpia",
    "Stir fry tomato egg",
    "Chicken parmersan",
    "Bleu cheese burgers",
    "Sausage onion pepper fry",
    "Sausage tortellini soup",
    "Fried rice",
    "Crunchwraps",
    "Grilled cheese sandwiches",
    "Chipped bbq chicken sandiwches",
    "Sushi bake",
    "Slow cooker chicken tinga",
    
  ];

  const sweets = [
    "Ice Cream",
    "Chocolate Cake",
    "Cookies",
    "Cheesecake",
    "Brownies",
    "Donuts",
    "Pie",
    "Cupcakes",
    "Pudding",
    "Fruit Tart"
  ];
  
  // Get References to Elements
const dinnerTab = document.getElementById("dinner-tab");
const sweetsTab = document.getElementById("sweets-tab");
const dinnerSpinner = document.getElementById("dinner-spinner");
const sweetsSpinner = document.getElementById("sweets-spinner");
const pickDinnerButton = document.getElementById("pick-dinner");
const pickSweetsButton = document.getElementById("pick-sweets");
const dinnerResult = document.getElementById("dinner-result");
const sweetsResult = document.getElementById("sweets-result");

// Function to Switch Tabs
function switchTab(selectedTab, selectedSpinner) {
  // Remove active class from all tabs
  dinnerTab.classList.remove("active");
  sweetsTab.classList.remove("active");

  // Hide all spinners
  dinnerSpinner.classList.add("hidden");
  sweetsSpinner.classList.add("hidden");

  // Add active class to the selected tab and show the corresponding spinner
  selectedTab.classList.add("active");
  selectedSpinner.classList.remove("hidden");
}

// Event Listeners for Tabs
dinnerTab.addEventListener("click", () => {
  switchTab(dinnerTab, dinnerSpinner);
});

sweetsTab.addEventListener("click", () => {
  switchTab(sweetsTab, sweetsSpinner);
});

// Function to Pick a Random Option with Flipping Effect
function pickRandom(options, resultElement) {
  resultElement.textContent = ""; // Clear the result text
  resultElement.classList.remove("visible"); // Hide the result initially

  const duration = 900; // 900 milliseconds
  const intervalTime = 30; // Time between each change (in milliseconds)

  let startTime = Date.now();

  // Use setInterval to rapidly cycle through options
  const interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    resultElement.textContent = options[randomIndex];

    // Stop the interval after the duration has passed
    if (Date.now() - startTime >= duration) {
      clearInterval(interval);

      // Pick the final option
      const finalIndex = Math.floor(Math.random() * options.length);
      resultElement.textContent = options[finalIndex];
      resultElement.classList.add("visible"); // Show the result
    }
  }, intervalTime);
}

// Event Listeners for Buttons
pickDinnerButton.addEventListener("click", () => {
  pickRandom(dinners, dinnerResult);
});

pickSweetsButton.addEventListener("click", () => {
  pickRandom(sweets, sweetsResult);
});

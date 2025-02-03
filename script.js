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
  
  // Get references to the button and result elements
  const pickDinnerButton = document.getElementById("pick-dinner");
  const resultElement = document.getElementById("result");
  
  // Function to pick a random dinner
  function pickDinner() {
    resultElement.textContent = ""; // Clear the result text
  
    // Set the duration for the "randomization" effect (in milliseconds)
    const duration = 900; // 900 milliseconds
    const intervalTime = 50; // Time between each change (in milliseconds)
  
    let startTime = Date.now();
  
    // Use setInterval to rapidly cycle through dinner options
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * dinners.length);
      resultElement.textContent = dinners[randomIndex];
  
      // Stop the interval after the duration has passed
      if (Date.now() - startTime >= duration) {
        clearInterval(interval);
  
        // Pick the final dinner option
        const finalIndex = Math.floor(Math.random() * dinners.length);
        resultElement.textContent = dinners[finalIndex];
      }
    }, intervalTime);
  }
  
  // Add event listener to the button
  pickDinnerButton.addEventListener("click", pickDinner);
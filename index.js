// The Magic Potion Shop - Console Game

// 1. Start the Game
function startGame() {
const playerName = prompt("Welcome to the Magic Potion Shop! What's your name?");
const age = parseInt(prompt("How old are you?"));
const element = prompt("What's your favorite element? (fire, water, earth, air)").toLowerCase();

const message = `Welcome ${playerName}! At ${age}, you're just the right age to master the powers of ${element}!`;
   



// 2. Stock Setup
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];

let potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 }
};
 

// Track gold and brewed potion count
let goldEarned = 0;
let potionsBrewed = 0;
let customersHelped = 0;

// Helper to show potion menu
function showPotionMenu() {
  let menu = "Potion Menu:\n";
  potions.forEach((potion) => {
    let { quantity, price } = potionStock[potion];
    menu += `${potion} - ${quantity} in stock - ${price} gold\n`;
  });
  alert(menu);
}




// 3. Customer Orders
for (let i = 0; i < 3; i++) {
  let customer = prompt("A customer is here! Take their order? (yes/no)").toLowerCase();
  if (customer === "yes") {
    customersHelped++;
    showPotionMenu();
    let choice = prompt("Which potion would they like?").toLowerCase();

    // Normalize choice to match stock keys
    let selectedPotion = potions.find(p => p.toLowerCase() === choice);

    if (selectedPotion && potionStock[selectedPotion].quantity > 0) {
      potionStock[selectedPotion].quantity--;
      goldEarned += potionStock[selectedPotion].price;
      alert(`You sold one ${selectedPotion} for ${potionStock[selectedPotion].price} gold!`);
    } else {
      alert("Sorry, that potion is out of stock or doesn't exist.");
    }
  } else {
    alert("You skipped the customer.");
  }
}

// 4. Brewing Potions
function brewPotion(potionName, amount) {
  if (potionStock[potionName]) {
    potionStock[potionName].quantity += amount;
    potionsBrewed += amount;
    alert(`You brewed ${amount} ${potionName}(s)!`);
  } else {
    alert("That potion doesn't exist.");
  }
}

for (let i = 0; i < 2; i++) {
  let brew = prompt("Do you want to brew a potion? (yes/no)").toLowerCase();
  if (brew === "yes") {
    showPotionMenu();
    let potionToBrew = prompt("Which potion would you like to brew?").toLowerCase();
    let amountToBrew = parseInt(prompt("How many would you like to brew?"));
    let potionKey = potions.find(p => p.toLowerCase() === potionToBrew);
    if (potionKey && amountToBrew > 0) {
      brewPotion(potionKey, amountToBrew);
    } else {
      alert("Invalid potion or amount.");
    }
  }
}

// 5. End of Day Report
let stockLeft = "";
for (let [potion, data] of Object.entries(potionStock)) {
  stockLeft += `${potion}: ${data.quantity} left\n`;
}

let finalMessage = `Great job, ${playerName}! You brewed ${potionsBrewed} potions and helped ${customersHelped} customers today!\n\nGold earned: ${goldEarned}\n\nRemaining Stock:\n${stockLeft}`;
alert(finalMessage);


document.getElementById("game-area").innerText = message;
}


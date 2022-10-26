//OBJECTS
const myDog = {
  // Only change code below this line
name:"Dogie",
legs: 4,
tails: 1,
friends: ["melis", "mavita", "adora"]

  // Only change code above this line
};
//Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line
//Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line
//Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
//Updating Object Properties
//Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
// Only change code below this line

//Add New Properties to a JavaScript Object
//Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
//Delete Properties from a JavaScript Object
//Delete the tails property from myDog. You may use either dot or bracket notation
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
 delete myDog.tails

// Only change code below this line
//Using Objects for Lookups
//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  var result = "";
  
  // Only change code below this line
  var lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
  };
  result = lookup[val];
  return result;
  
  // Only change code above this line
  }
  
  // Change this value to test
  phoneticLookup("charlie");
  //Testing Objects for Properties
  //Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found"
  function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)) {
  
      return obj[checkProp];
    }
    else{
  return "Not Found";
    }
    
    // Only change code above this line
  }
//38
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
//39
  // Setup
const myArr = [["John", 23], ["cat", 2]];

// Only change code below this line
myArr.push(["dog", 3]);
//40 Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray
// const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].

// Setup
const myAr = [["John", 23], ["cat", 2]];

// Only change code below this line
let  removedFromMyArray = myAr.pop();
//41 Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray
// Setup
const myArra = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArr = myArray.shift();
//42
//Add ["Paul", 35] to the beginning of the myArray variable using unshift().
// Setup
const myA = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//44 ["Chocolate Bar", 15] There should be at least 5 sub-arrays in the list
myList = [
    ["Sweet", 12],
    ["Apple", 45],
    ["Mango", 30],
    ["Perl", 70],
    ["Gino", 32]

];
//45 fuctions!!!!!!!
//Create a function called reusableFunction which prints the string Hi World to the dev console.
//Call the function.
function reusableFunction () {
    console.log("Hi world");
  }
  reusableFunction();
//46 Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//Call the function with two numbers as arguments.
function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(2, 5);
  //47 Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value
  function timesFive(num) {
    return num * 5;
  }
  const result = timesFive(3);
  //48 local and global variables
  //Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
 const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//50 Call the processArg function with an argument of 7 and assign its return value to the variable processed
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//51
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

//Add the number to the end of the array, then remove the first element of the array.

//The nextInLine function should then return the element that was removed
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  //52 Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwis
  
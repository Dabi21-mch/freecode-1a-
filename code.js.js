//53
//Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(12);
  //Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7
  // Setup
function testStrict(val) {
    if (val ===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(7);
  //The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equa
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality("10", "10");
  //Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99
  // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  //Add the greater than operator to the indicated lines so that the return statements make sense
  function testGreaterThan(val) {
    if (val >105) {  // Change this line
      return "Over 100";
    }
  
    if (val > 30) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
  //Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >=10 || val <=20) {
  
      return "Outside";
    
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  //Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val <10 || val >20) {
  
      return "Outside";
    
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(10);
  //Combine the if statements into a single if/else statement
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  else{
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  //Convert the logic to use else if statements.
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else {
    return "Between 5 and 10";
  }
  }
  testElseIf(7);
  //Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge
function testSize(num) {
    // Only change code below this line
  if (num <5) {
    return "Tiny";
  }
  else if(num <10) {
    return "Small";
  
  }
  else if(num < 15) {
    return "Medium";
  
  }
  else if(num < 20) {
    return "Large";
  }
  else if(num >= 20) {
    return "Huge";
  }
  else{
    return "Change Me";
  }
    // Only change code above this line
  }
  
  testSize(7);
  // Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

  // Strokes	Return
  // 1	"Hole-in-one!"
  // <= par - 2	"Eagle"
  // par - 1	"Birdie"
  // par	"Par"
  // par + 1	"Bogey"
  // par + 2	"Double Bogey"
  // >= par + 3	"Go Home!"
  // par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
  
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if ( strokes == 1) {
  return names[0];
}
else if (strokes <= par - 2) {
return names[1];
}
else if (strokes == par - 1) {
  return names[2];
}
else if (strokes == par){
  return names[3];
}
else if (strokes == par + 1) {
  return names[4];
}
else if (strokes == par + 2) {
  return names[5];
}
else if (strokes >= par + 3) {
  return names[6];
}
else{
  return "Change Me";
}
  // Only change code above this line
}

golfScore(5, 4);
// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delt
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
case 1:
return "alpha";
break;
case 2:
return "beta";
break;
case 3:
return "gamma";
break;
case 4:
return "delta"; 
break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);
// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a": 
  return "apple";
  break;
  case "b": 
  return "bird";
  break;
  case "c":
  return "cat";
  break;
  default:
  return "stuff";
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);
// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  case 2:
  case 3:
  return"Low";
  case 4:
  case 5:
  case 6:
  return "Mid";
  case 7:
  case 8:
  case 9:
   return"High";
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//
// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string
// Setup
function abTest(a, b) {
  // Only change code below this line
if ( a < 0 || b < 0) {
  return undefined;
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//COUNTING CARDS
let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
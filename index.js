var a;
var b = 2;
console.log(a)
a = 7;

b =a;

console.log(a)


function wordBlanks(myNoun, myAdjective, myVerb, MyAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" 
    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Access multi - Dimensional Arrays with Indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];
console.log(myData)



// Passing Values to Functions with Arguements
// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

function FunctionWithArgs(a, b) {
    console.log(a + b);
}
FunctionWithArgs(10, 5);

// local scope and functions
//Exapmple
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// console.log(myVar);


// Assignment with a Returned Value
var changed = 0;

function change(num) {
    return (num + 20) / 3;
}

changed = change(10);
console.log(changed)


// comparison with the equality operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

// comparison with the less than or equal to operator
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(10))


// Comparisons with the Logical and operator

function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(10));


// comparisons with the logical or operator
function testLogicalOr(val) {
if (val < 10 || val > 20) {
    return "Outside";
}
 return "Inside";
}

console.log(testLogicalOr(15));


// Else if statement
function testElseIf(val) {
    if (val >10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5"; 
    } else{
      return "Between 5 and 10";  
    }
}
testElseIf(7);

// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }else if (val < 10) {
        return "Less than 10";
    }else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));

// Chaining if else statements

function testSize(num) {
    if (num <5) {
        return "Tiny"
    } else if (num < 10) {
      return "small"  
    } else if (num < 15) {
      return "medium"
    } else if (num < 20) {
      return "Large"   
    } else {
        return "Huge"
    }
}

console.log(testSize(19))

// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if (strokes ==1) {
      return names[0] 
    } else if (strokes <= par -2) {
      return names[1]
    } else if (strokes == par -1) {
      return names[2]  
    } else if (strokes == par) {
      return names[3]
    } else if (strokes == par + 1) {
      return names[4]
    } else if (strokes == par + 2) {
      return names[5]
    } else if (strokes >= par + 3) {
      return names[6]
    }
}

console.log(golfScore(5, 7));

// Switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;    
        case 3:
            answer = "gamma";
            break;    
        case 4:
            answer = "delta";
            break;    
    }
    return answer;
}

console.log(caseInSwitch(3));

// Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;    
        case 3:
            answer = "gamma";
            break;    
        case 4:
            answer = "delta";
            break;    
        default:
            answer = "stuff";
            break;    
    }
    return answer;
}

console.log(switchOfStuff(5));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;           
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;           
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;           
    }
    return answer;
}

console.log(sequentialSizes(9));

// returning Boolean values from functions
function isLess(a, b) {
    return a < b;
}

console.log(isLess(20, 15));

// Build Javascript objects

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails":2,
    "friends":[]
}

// Accessing Object Properties with Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(testObj.shoes);

// Accessing Object Properties with bracket notation 
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

console.log(testObj["my side"]);

// Updating Object Properties
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails":1,
    "friends":["freeCodeCamp Campers"]    
};

myDog.name = "Happy Coder";
console.log(myDog.name);

// Add New Properties to an Object
myDog['bark'] = "woof!"
console.log(myDog)


// Delete Properties from an object
delete myDog.tails;
console.log(myDog);

// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie":"Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result || val +'is not a valid code.';
}

console.log(phoneticLookup("bravo"));

// testing objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    }else {
        return "Not Found";
    }
}
console.log(checkObj("shito"));

// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
    },
    "outside": {
        "trunk": "jack"
     }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];//NB used a bracket notation for the property because of the spacing 
console.log(gloveBoxContents)


// Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)

// Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "22468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Kepp a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }

    return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));


// Iterate with While loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);


// Iterate with For Loops
// first thing is the initiating second condition and final expression

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

console.log(myArray);

//Iterate Odd Numbers with a for loop

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

// count Backwards with a for loop

var backArray = [];

for (var i = 9; i > 0; i -= 2) {
    backArray.push(i);
}

console.log(backArray);

// Iterate Through an Array with a for Loop

var myArr = [ 2, 3, 4, 5, 6 ];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j <arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


// Iterate with Do...While Loops

var myArray = [];
var i = 10;

do{
    myArray.push(i);
    i++;
  }  while(i < 5)
 
  console.log(i, myArray);



// Profile lookup

var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "+358-123456",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "+358-987654",
        "likes": ["Hogwarts", "Magic", "Quidditch"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "+358-555555",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number":"unknown",
        "likes":["JavaScript","Coffee"]
    }
];

function lookUpProfile(name, prop){
   for (var i=0; i<contacts.length; i++){
     if (contacts[i].firstname === name){
        return contacts[i][prop] || 'No such property';
     }
   }
   return "No such contact";
}

var data = lookUpProfile("Kristian", "number");

console.log(data);


// Generate Random Fractions

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());


// Generate Random Whole Numbers

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


// Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"));


// use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");


//use the Conditional (ternary) Operator

function checkEqual(a, b) {
    return a === b ? true : false;
}

console.log(checkEqual(1, 2));



//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(-9));


//compare Scopes of the var and let keywords 

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();


//Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");


//Mutate and Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

  
    //s = [2, 5, 7];
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
    

}
editInPlace();

console.log(s)


//Prevent Object Mutation

// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try {
//       MATH_CONSTANTS.PI = 99;
//     } catch( ex ) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();



// Use arrow functions to write concise anonymous functions

const magic = () => new Date();

console.log(magic);


//Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3,4,5]));



// Write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));



// Use the Rest Operator with Function Parameters

const sum = (function() {
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// Use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);



// Use Destructuring Assignment to Assign Variables from Objects

// The provided code defines an object AVG_TEMPERATURES with properties representing the
// average temperatures for "today" and "tomorrow". The function getTemOfTmrw uses 
// destructuring assignment to extract the temperature of tomorrow from the avgTemperatures 
// parameter, which is an object.


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTemOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

// In this example, the getTemOfTmrw function takes an object (avgTemperatures) as a parameter. 
// Using destructuring assignment, it extracts the value associated with the "tomorrow" property 
// and assigns it to the variable tempOfTomorrow. Finally, the function returns the temperature of tomorrow.

// The const { tomorrow: tempOfTomorrow } = avgTemperatures; line is a destructuring assignment, a feature introduced in ECMAScript 6 (ES6), which allows you to extract values from objects and arrays.

console.log(getTemOfTmrw(AVG_TEMPERATURES));



// Destructing Assignment with Nested Objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));



// Use Destructing Assignment to Assign Variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);


let e = 8, g = 6;
(() => {
    "use strict";
    [e ,g] = [g, e]
})();
console.log(e);
console.log(g); 




// Use Destructing Assignment with the Rest Operator

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [ , , ...crr] = list;

    return crr;
}

const crr = removeFirstTwo(source);
console.log(crr);
console.log(source);



// Use Destructing Assignment to pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    mediian: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };

})();
console.log(stats);
console.log(half(stats));



// Create Strings using Template Literals

const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>}`)
}

return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)



// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); 



// Write Concise Declarative Functions

const bicycle = {
    gear: 2,
    setGear(newGear){
        this.gear = newGear;
        }
};

bicycle.setGear(3);
console.log(bicycle.gear);





// Use Class syntax to Define a Constructor Function
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)





// Use getters and setters to Control Access to an Object

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);






// Create a JavaScript Class for a Book with properties and methods
class Book{
    constructor(title, author, isbn){
        this.title= title;
        this.author= author;
        this.isbn= isbn;
        }
        displayBookInfo(){
            console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`);
            };
            };
            console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`);





// Understand the Difference Between import and require            
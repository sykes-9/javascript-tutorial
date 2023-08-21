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
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
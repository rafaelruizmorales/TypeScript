"use strict";
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
// To compile TS to JS -> `tsc main`
// To see the JS file in action we do not need the browser, just use `node main`
// We do not need to compile all the time since we can WATCH the file -> `tsc main --watch`
/******************************************************************************************************/
// BASIC TYPES IN TS: Boolean, Number and String
var isBeginner = true;
var age = 37;
var sentence = "My name is Rafa and \nI am " + age + " years old";
/******************************************************************************************************/
// Literal Types - let and const
// So, TypeScript sets the type to be "Hello World", not string
var helloWorld = "Hello World";
// On the other hand, a let can change, and so the compiler declares it a string
var hiWorld = "Hi World";
/******************************************************************************************************/
// Array type. Two ways
// WAY A)
var list1 = [1, 2, 3];
// WAY B)
var list2 = [1, 2, 3];
/******************************************************************************************************/
// TUPLES: when there are more than 1 type. The number of elements in the array are fix
var person1 = ['Rafa', 37];
/******************************************************************************************************/
// ENUMS: give a friendly name to a set of numeric values
var COLOURS;
(function (COLOURS) {
    COLOURS[COLOURS["RED"] = 0] = "RED";
    COLOURS[COLOURS["GREEN"] = 1] = "GREEN";
    COLOURS[COLOURS["BLUE"] = 2] = "BLUE";
})(COLOURS || (COLOURS = {}));
// 0     1      2
var myColour = COLOURS.GREEN;
console.log(myColour); // prints 1
// we can specify the numners we want
var CARDINAL;
(function (CARDINAL) {
    CARDINAL[CARDINAL["NORTH"] = 10] = "NORTH";
    CARDINAL[CARDINAL["EAST"] = 11] = "EAST";
    CARDINAL[CARDINAL["SOUTH"] = 12] = "SOUTH";
    CARDINAL[CARDINAL["WEST"] = 13] = "WEST";
})(CARDINAL || (CARDINAL = {}));
// 1          11    12     13
var myCardinal = CARDINAL.SOUTH;
console.log(myCardinal); // prints 12
/******************************************************************************************************/
// UNION of TYPES for the same variables -> |
// it is better to use UNION TYPES than any, so we can use *IntelliSense
// * IntelliSense is a general term for various code editing features including: 
// code completion, parameter info, quick info, and member lists.
var multiType;
multiType = 20;
// when typing `multiType.` we get access to methods that can be applied to the number type!
multiType = false;
/******************************************************************************************************/
// FUNCTIONS
function add(n1, n2) {
    return n1 + n2;
}
// ES6: const add = (n1: number, n2: number): number => n1 + n2
add(1, 2); // It is RIGHT, we pass 2 numbers as parameters and return a number
// add(33, '23') // This is WRONG since we said the 2 parameters have to be numbers!
// Optional parameters in functions -> ?
function addOptional(n1, n2) {
    return n1 + n2; // <- Hover over and look
}
console.log(addOptional(5, 4)); // --> prints 9
console.log(addOptional(5)); // --> prints NaN because n2 is undefined and 5 + undefined = NaN
// Pre-defined values
function addPreDefined(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
console.log(addPreDefined(5, 4)); // --> prints 9
console.log(addPreDefined(5)); // --> prints 5 because second parameter is pre-defined to 0
var myPerson = {
    firstName: 'Rafael',
    lastName: 'Ruiz Morales'
};
function printPerson(p) {
    return "I am a Person: " + p.firstName + " " + p.lastName;
}
console.log(printPerson(myPerson));
var myPersonWithAge = {
    person: {
        firstName: 'Rafael',
        lastName: 'Ruiz Morales'
    },
    age: 37
};
function printPersonWithAge(p) {
    return "I am a Person With age: " + p.person.firstName + " " + p.person.lastName + " - age: " + p.age;
}
console.log(printPersonWithAge(myPersonWithAge));
/******************************************************************************************************/
// GENERICS
// Example 1
function identity(arg) {
    return arg;
}
console.log(identity(5).toString());
// Example 2
function identityWithGenerics1(arg) {
    return arg;
}
console.log(identityWithGenerics1(5).toString());
console.log(identityWithGenerics1("HOLA").toLowerCase());
// Example 3
function identityWithGenerics2(arg) {
    return arg;
}
console.log(identityWithGenerics2([5]).toString());
console.log(identityWithGenerics2(["HOLA", 3, true]).length);
// Example 4
function myIdentity(arg) {
    return arg;
}
var identityFunction = myIdentity;
console.log(identityFunction); // [Function: myIdentity]
console.log(identityFunction("Raf")); // Raf
console.log(identityFunction(false)); // false

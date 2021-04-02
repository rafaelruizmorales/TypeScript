export {} // so TS treats this as a module
const message = 'Welcome Back';
console.log(message);

// To compile TS to JS -> `tsc main`
// To see the JS file in action we do not need the browser, just use `node main`

// We do not need to compile all the time since we can WATCH the file -> `tsc main --watch`

/******************************************************************************************************/

// BASIC TYPES IN TS: Boolean, Number and String

const isBeginner: boolean = true;

const age:number = 37;

const sentence: string = `My name is Rafa and 
I am ${age} years old`;

/******************************************************************************************************/

// Literal Types - let and const

// So, TypeScript sets the type to be "Hello World", not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";

/******************************************************************************************************/

// Array type. Two ways

// WAY A)
const list1: number[] = [1, 2, 3]
// WAY B)
const list2: Array<Number> = [1, 2, 3]

/******************************************************************************************************/

// TUPLES: when there are more than 1 type. The number of elements in the array are fix

const person1: [string, number] = ['Rafa', 37]

/******************************************************************************************************/

// ENUMS: give a friendly name to a set of numeric values

enum COLOURS { RED, GREEN, BLUE }
            // 0     1      2
let myColour: COLOURS = COLOURS.GREEN
console.log(myColour) // prints 1

// we can specify the numners we want
enum CARDINAL { NORTH = 10, EAST, SOUTH, WEST }
               // 10         11    12     13
const myCardinal: CARDINAL = CARDINAL.SOUTH
console.log(myCardinal) // prints 12

/******************************************************************************************************/

// UNION of TYPES for the same variables -> |
// it is better to use UNION TYPES than any, so we can use *IntelliSense

// * IntelliSense is a general term for various code editing features including: 
// code completion, parameter info, quick info, and member lists.
let multiType: number | boolean
multiType = 20;
// when typing `multiType.` we get access to methods that can be applied to the number type!
multiType = false;

/******************************************************************************************************/

// FUNCTIONS

function add(n1: number, n2: number): number {
    return n1 + n2
}
// ES6: const add = (n1: number, n2: number): number => n1 + n2

add(1, 2) // It is RIGHT, we pass 2 numbers as parameters and return a number
// add(33, '23') // This is WRONG since we said the 2 parameters have to be numbers!

// Optional parameters in functions -> ?
function addOptional(n1: number, n2?: number): number {
    return n1 + n2 // <- Hover over and look
}
console.log(addOptional(5, 4)); // --> prints 9
console.log(addOptional(5));    // --> prints NaN because n2 is undefined and 5 + undefined = NaN

// Pre-defined values
function addPreDefined(n1: number, n2: number = 0): number {
    return n1 + n2;
}
console.log(addPreDefined(5, 4)); // --> prints 9
console.log(addPreDefined(5));    // --> prints 5 because second parameter is pre-defined to 0

/******************************************************************************************************/

// INTERFACES

// Example 1
interface Person {
    id?: number;
    firstName: string;
    lastName: string
}

const myPerson:Person = {
    firstName: 'Rafael',
    lastName: 'Ruiz Morales'
}

function printPerson(p: Person): string {
    return `I am a Person: ${p.firstName} ${p.lastName}`
}

console.log(printPerson(myPerson))

// Example 2

interface PersonWithAge {
    person: Person, // person is of type Person -> { id?: number, firstName: string, lastName: string }
    age: number
}

const myPersonWithAge:PersonWithAge = {
    person: {
        firstName: 'Rafael',
        lastName: 'Ruiz Morales'
    },
    age: 37
}

function printPersonWithAge(p: PersonWithAge): string {
    return `I am a Person With age: ${p.person.firstName} ${p.person.lastName} - age: ${p.age}`
}

console.log(printPersonWithAge(myPersonWithAge))

/******************************************************************************************************/

// GENERICS

// Example 1
function identity(arg: number): number {
    return arg;
}
console.log(identity(5).toString())


// Example 2
function identityWithGenerics1<T>(arg: T): T {
    return arg;
}
console.log(identityWithGenerics1(5).toString())
console.log(identityWithGenerics1("HOLA").toLowerCase())

// Example 3
function identityWithGenerics2<T>(arg: T[]): T[] {
    return arg;
}
console.log(identityWithGenerics2([5]).toString())
console.log(identityWithGenerics2(["HOLA", 3, true]).length)

// Example 4
function myIdentity<T>(arg: T): T {
    return arg;
  }
  
  let identityFunction: <T>(arg: T) => T = myIdentity;
  console.log(identityFunction) // [Function: myIdentity]
    console.log(identityFunction("Raf")) // Raf
    console.log(identityFunction(false)) // false

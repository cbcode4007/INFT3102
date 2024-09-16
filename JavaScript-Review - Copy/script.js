console.log('I am running!')

// Variables & Data Types
// var - similar to let (previously global scope)
// let - generic declaration of a variable
// const - constant i.e. immutable i.e. cannot change the value of the variable after declaration

// Arrays
// Create an array with 5 elements from values 1-5
let arr = [1,2,3,4,5]
// Display the element at index 2 in console (value 3, indices start at 0)
console.log(arr[2])
// Append a value 6 to the end of the array and display the array
arr.push(6)
console.log(arr)
// Remove the item at the end of the array and display the array
arr.pop()
console.log(arr)
// Remove the item at the beginning of the array and display the array
arr.shift()
console.log(arr)
// Add value 1 back to the beginning of the array and display the array
arr.unshift(1)
console.log(arr)
// Display a different kind of index list using shifts (they all come out on different lines)
while (arr.length > 0) {
    let i = arr.shift();
    console.log(i);
    }
// Display another array created right in the log statement
console.log([1,2,3])

// Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Create a myCar object
var myCar = {
    type: "ferrari",
    color: "red",
    year: 2025
}
// Make its values unchangable
Object.freeze(myCar)
// Try to change a value and display the object
myCar.type = "plane"
console.log(myCar)

// Conditions & Loops
// Set a weather variable to hold rain string as a value
let weather = "rain"
// Declare an outfit variable and use ifs to decide if, depending on the weather value, it will be raincoat or no raincoat string
let outfit;
if (weather == "rain") {
    outfit = "raincoat"
} else {
    outfit = "no raincoat"
}
// Display outfit
console.log(outfit)
// Create a calculator of two numbers and four operators, use strict equality operators as opposed to abstract/value equality or assignment 
// const numberOne = parseInt(prompt("Please pick the first number: "))
// const operator = prompt("Please pick an operator: ")
// const numberTwo = parseInt(prompt("Please pick the second number: "))
// if (operator === "+") {
//     console.log(numberOne + numberTwo)
// } else if (operator === "-") {
//     console.log(numberOne - numberTwo)
// } else if (operator === "/") {
//     console.log(numberOne / numberTwo)
// } else if (operator === "*") {
//     console.log(numberOne * numberTwo)
// }

// Functions/Scope/Callback
// Display a result using the function below this line
console.log(sum(5,10))
// Function Declarations -> Are HOISTED -> they have global scope
function sum(a,b) {
    return a + b
}
// Function Expressions version
const sum2 = function (a, b) {
    return a + b
}
// Cannot be placed before function initialization of sum2
console.log(sum2(10,20))

// Arrow Functions version
const sum3 = (a,b) => a + b
// Cannot be placed before function initialization of sum3
console.log(sum3(20,40))
// Demonstration of scope, the order of nums in the log statements must remain as is
function outerFn() {
    var num1 = 5
    innerFn()
    function innerFn() {
        var num2 = 10
        console.log(num2)
    }
    console.log(num1)
}
outerFn()
// Callback functions
let arr2 = [1,2,3,4,5,6,7,8]
// Increment each index value in the array by 5
for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] + 5
}
// Also increment each index value in the array by 5, using forEach, an arrow function and a callback function with array.map
arr2.forEach(num => num + 5)
let newArray = arr2.map(function(num) {
    return num + 5
})
// console.log(forArray)
console.log(newArray)

// Classes/Inheritance
// Create a car class with a constructor for string type and boolean engineIsOn
class Car {
    constructor (type, engineIsOn) {
        this.type = "grah"
        this.engineIsOn = false
    }
    // Add a function to turn the engine on for a car instance
    turnEngineOn() {
        this.engineIsOn = true
    }
}
// Create a motorcycle class that inherits from car
// class Motorcycle extends Car () {}
// 
function Automobile(type) {
    this.type = type
    this.turnEngineOn = function () {
        this.engineIsOn = true
        console.log("Engine has been turned on!")
    }
}

// let myCar = new Car("Ferrari")
// myCar.turnEngineOn()


// let car = {
//     type: "ferrari",
//     price: "$999999",
//     client: "person",
//     color: 'red',
//     turnEngineOn: function() {

//     }
// }

// let arr =[1,2, [], {}, () => {}]




// Asynchronous/Promises/Fetch/Async Await JavaScript

// Error Handling (try/catch)

// DOM


// AAU, I want to search for a pokemon by its name and see a picture of that pokemon:
    // 1. Update the HTML with a form (text input)
    // 2. Attach a click eventListener to the form submission
    // 3. Attach a callback function to the eventListener
    // 4. Store the user search text in a variable
    // 5. Utilize the user search text in our API query
    // 6. Once API data has returned, we will display the data in the HTML dynamically using DOM 

// Store the FORM HTML element in a variable
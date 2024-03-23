//JavaScript is dynamically typed language 

// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Symbol
const id1 = Symbol('123')
const id2 = Symbol('123')

// console.log(id1 === id2); //false

//BigInt
const  bigNumber = 12345677n
// console.log(typeof(bigNumber)); //output => bigInt



//Reference Type (Non-Primitive)

// Types: Arrays, Object, Functions

//Arrays
const language = ["python", "java", "c++", "javascript"];


//Object

const employee = {
    name: "Rakesh",
    salary: 50000,
}

// function

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction); //output => function object



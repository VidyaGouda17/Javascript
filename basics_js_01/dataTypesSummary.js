//  Primitive =>  call by value hota hai will not get the original refrence will get the copy of the reference from the memrory

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference types (Non primitive) :- this values are those values will save the refernce in the memory

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++ Memory Stack +++++++++++++++++++++++++++++++/
//Stack Memory:
// The stack is a region of memory used for function call management and local variable storage.
// When a function is called, a new frame is pushed onto the stack to store function arguments and local variables.
// The stack follows a last-in, first-out (LIFO) structure, meaning the most recently called function is at the top of the stack.
// Once a function completes its execution, its stack frame is popped, and memory is freed.
// Primitive data types like numbers, booleans, and references to objects are often stored on the stack.
// Heap Memory:

// The heap is a region of memory used for dynamic memory allocation.
// Objects, arrays, and other complex data structures in JavaScript are usually stored on the heap.
// Memory allocation on the heap is typically managed by JavaScript's garbage collector.
// When an object is no longer referenced, the garbage collector frees up the associated memory.
// This helps prevent memory leaks in JavaScript programs.

//Note 
/*
1) stack memory : 
a)Basicaly store the primitive data types.
b)when we store any variable the refrece of that varibale will be allocated memory in the stack 
c) when we try to change the variable data the change in data will not effect the original value because will 
 always get the copy of the main variable reference in the stack memory 
 d) the refrecne will be called by value 

 2)Heap memory 
 a)Non primitive data types are stored in the this memroy 
 b)when we delcare any object and assigned the the referece of this object to other varibale 
 other varibale will refere the referece of the original variable 
 c) when we try to change the any value in the second variable the original object value will be changed .

*/


let name = "vidya";
let name_1 = "Aru";
console.log(name); /// vidya 
console.log(name_1) // Aru

let user_1 = {
    name: 'z',
    age: 24
}

let user_2 = user_1;
 user_2.name = "Naira";
 console.log(user_1.name);// Naira
 console.log(user_2.name); //Naira 
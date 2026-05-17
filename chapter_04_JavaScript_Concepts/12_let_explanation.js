// let is block scoped and does not allow re-declaration within the same block
let l = 10;
// let l = 20; // invalid identifier - re-declaration is not allowed with let
l = 30; // re-assignment is allowed with let

let retryCount = 0;
retryCount = retryCount + 1; // re-assignment is allowed with let
retryCount = retryCount + 1;
console.log("Retry Attempt:", retryCount); // Retry Attempt: 2

// let retryCount = 5; // invalid identifier - re-declaration is not allowed with let
// SyntaxError: Identifier 'retryCount' has already been declared


//this is a block scope - code that is enclosed within curly braces {}. it can be a function, loop, if statement, etc.
if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);
}

console.log("Outside block:", executionTime); // ReferenceError: executionTime is not defined - because let is block scoped and cannot be accessed outside the block.
// we cant use executionTime outside the block because it is declared with let and is block scoped. it is not accessible outside the block. it will throw a reference error if we try to access it outside the block.

// block can be 
// {}
// function() {}
// if() {}
// for() {} 

//  let is loyal
// var is traiter 

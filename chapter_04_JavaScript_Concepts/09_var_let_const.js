
var v = 30;
let l = 10;
const c = 1.23;

// we will not user var in automation because of its function scope and hoisting issues. it leaks outside the block and can cause unexpected behavior.

var browser = "chrome";
var browser = "firefox"; // re-declaration is allowed with var
browser = "edge"; // re-assignment is allowed with var

//for , fuction 

var testCases = ["login", "logout", "signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log("running test:", testCases[i]);
}

console.log("loop counter leaked outside:", i);  //   i is accessible outside the loop because of var's function scope

//function - code that can be reused and executed when called

console.log("Hi");
console.log("Hi");
console.log("Hi");

function Say() {
    console.log("Hi from Function");
}


Say();
Say();

// this function is called as boilerplate code - code that is repeated multiple times in a program 
// and can be replaced with a function to avoid redundancy and improve maintainability.

// funtion has 2 main parts - function declaration and function call. 
// function declaration is the code that defines the function and its behavior, 
// while function call is the code that executes the function and its behavior.
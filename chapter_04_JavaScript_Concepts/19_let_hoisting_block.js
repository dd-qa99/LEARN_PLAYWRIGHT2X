// let is blocked scopes

let x="global";

if (true){

// tdz zone
// console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x="block";
console.log(x); // block

}
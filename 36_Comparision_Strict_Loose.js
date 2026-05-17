
// number == string 
console.log(1 == "1"); // true (loose equality, type coercion happens)
console.log(12 === "12"); // false (strict equality, no type coercion)
console.log(12 === "13");
// == checks only the value 
// === checks both value and type
console.log(0 == ""); // true (loose equality, type coercion happens) "" is converted to 0
console.log(0 === ""); // false

console.log(5 === 5); // true (strict equality, both value and type are considered)
console.log(5 === "5"); // false (strict equality, both value and type are considered)

console.log(5 == 5); // true (loose equality, type coercion happens)
console.log(5 == "5"); // true (loose equality, type coercion happens)

console.log(true == 1); // true (loose equality, type coercion happens)
console.log(false == 0); // true (loose equality, type coercion happens)
console.log(true == 2); // false (loose equality, type coercion happens)
console.log(true == "4"); // false (loose equality, type coercion happens)

console.log(5 != "5"); // false
console.log(5 !== "5"); // true
// console.log(5 !=== "5");  doesn't exist syntax error


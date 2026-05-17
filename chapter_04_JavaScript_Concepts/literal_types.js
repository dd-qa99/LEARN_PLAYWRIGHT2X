// ============================================================
// JavaScript Literal Types
// ============================================================

// 1. Number Literals
let integer = 10;
let decimal = 3.14;
let hex = 0xFF;       // Hexadecimal
let binary = 0b1010;  // Binary
let octal = 0o17;     // Octal
let scientific = 1.23e4; // Scientific notation
console.log("Number Literals:", integer, decimal, hex, binary, octal, scientific);

// 2. String Literals
let single = 'Hello';
let double = "World";
console.log("String Literals:", single, double);

// 3. Template Literals (Template Strings)
let name = "Sam";
let template = `Hi, my name is ${name}!`;
console.log("Template Literal:", template);

// 4. Boolean Literals
let isTrue = true;
let isFalse = false;
console.log("Boolean Literals:", isTrue, isFalse);

// 5. Null Literal
let empty = null;
console.log("Null Literal:", empty);

// 6. Undefined
let notAssigned = undefined;
console.log("Undefined:", notAssigned);

// 7. Object Literals
let person = { name: "Sam", age: 25, city: "London" };
console.log("Object Literal:", person);

// 8. Array Literals
let colors = ["red", "green", "blue"];
console.log("Array Literal:", colors);

// 9. RegExp Literals
let pattern = /hello/i;
console.log("RegExp Literal:", pattern);
console.log("RegExp test:", pattern.test("Hello World"));

// 10. BigInt Literals
let bigNumber = 9007199254740993n;
console.log("BigInt Literal:", bigNumber);

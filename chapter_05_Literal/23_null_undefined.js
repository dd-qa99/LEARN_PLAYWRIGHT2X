// ============================================================
// null vs undefined in JavaScript
// ============================================================

// ---------- UNDEFINED ----------
// "undefined" means a variable is declared but no value is assigned.
// JavaScript gives it automatically.

let a;
console.log("Value of a:", a);          // undefined
console.log("Type of a:", typeof a);    // "undefined"


// ---------- NULL ----------
// "null" means "intentionally empty" — YOU set it to say "no value".

let b = null;
console.log("Value of b:", b);          // null
console.log("Type of b:", typeof b);    // "object"  (a known JS quirk)


// ---------- QUICK COMPARISON ----------
console.log("null == undefined :", null == undefined);   // true  (loose equality)
console.log("null === undefined:", null === undefined);  // false (strict equality - different types)


// ---------- REAL-LIFE EXAMPLE ----------
let userName;            // not assigned yet  -> undefined (JS default)
let userEmail = null;    // we intentionally say "no email yet"

console.log("userName :", userName);   // undefined
console.log("userEmail:", userEmail);  // null


// ============================================================
// MORE SIMPLE EXAMPLES
// ============================================================

// ---------- Example 1: Variable declared without value ----------
let city;
console.log("Example 1 -> city:", city);    // undefined

// ---------- Example 2: Function with no return statement ----------
function sayHi() {
    console.log("Hi!");
    // no return -> returns undefined
}
let result = sayHi();
console.log("Example 2 -> result:", result); // undefined

// ---------- Example 3: Function parameter not passed ----------
function greet(name) {
    console.log("Example 3 -> Hello,", name); // undefined when no arg passed
}
greet();  // no argument passed

// ---------- Example 4: Accessing a property that doesn't exist ----------
let student = { name: "Asha", age: 22 };
console.log("Example 4 -> student.marks:", student.marks); // undefined

// ---------- Example 5: Developer setting "empty" intentionally ----------
let selectedProduct = null;   // nothing selected yet
console.log("Example 5 -> selectedProduct:", selectedProduct); // null

// ---------- Example 6: Resetting a value to "empty" ----------
let loggedInUser = "Durga";
console.log("Example 6 -> before logout:", loggedInUser);
loggedInUser = null;          // user logged out -> clear value
console.log("Example 6 -> after logout :", loggedInUser);

// ---------- Example 7: null in an object property ----------
let book = { title: "JS Basics", author: null }; // author unknown
console.log("Example 7 -> book.author:", book.author); // null

// ---------- Example 8: Checking for null or undefined ----------
let value1;          // undefined
let value2 = null;   // null

if (value1 == null) {  // true for BOTH null and undefined (loose ==)
    console.log("Example 8 -> value1 is null or undefined");
}
if (value2 == null) {
    console.log("Example 8 -> value2 is null or undefined");
}

// ============================================================
// SUMMARY
// ------------------------------------------------------------
// undefined -> assigned by JavaScript (variable declared, no value)
// null      -> assigned by the developer (means "empty on purpose")
// typeof undefined -> "undefined"
// typeof null      -> "object"
//
// Common places you see UNDEFINED:
//   - variable declared but not assigned
//   - function with no return
//   - function parameter not passed
//   - object property that doesn't exist
//
// Common places you use NULL:
//   - to intentionally clear a value
//   - to mark "no data yet" (e.g. user not logged in)
//   - as a placeholder in objects
// ============================================================

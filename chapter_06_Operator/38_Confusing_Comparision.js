// ============================================================
// Confusing Comparisons in JavaScript (== vs ===)
// File: 38_Confusing_Comparision.js
// ============================================================

// ---------- Typeof quick checks ----------
console.log('typeof "1"       :', typeof "1");
console.log('typeof 1         :', typeof 1);
console.log('typeof ""       :', typeof "");
console.log('typeof 0         :', typeof 0);
console.log('typeof true      :', typeof true);
console.log('typeof false     :', typeof false);
console.log('typeof null      :', typeof null);        // "object" (JS quirk)
console.log('typeof undefined :', typeof undefined);
console.log('typeof []        :', typeof []);          // "object"
console.log('typeof {}        :', typeof {});          // "object"
console.log('typeof NaN       :', typeof NaN);         // "number"

// ---------- A) String vs Number ----------
console.log("1" == 1);   // true  ("1" -> 1)
console.log("1" === 1);  // false (different types)
console.log("" == 0);    // true  ("" -> 0)
console.log("" === 0);   // false
console.log("0" == false);   // true  ("0" -> 0, false -> 0)
console.log("0" === false);  // false
console.log(" " == 0);       // true  (" " -> 0)
console.log(" \t\n" == 0);   // true  (whitespace -> 0)

// ---------- B) Boolean vs Number ----------
console.log(false == 0);  // true  (false -> 0)
console.log(false === 0); // false
console.log(true == 1);   // true  (true -> 1)
console.log(true === 1);  // false
console.log(" " == false);   // true  (" " -> 0, false -> 0)

// ---------- C) null and undefined ----------
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(null == 0);          // false
console.log(undefined == 0);     // false

// ---------- D) Arrays ----------
console.log([] == "");   // true  ([] -> "")
console.log([] === "");  // false
console.log([] == 0);    // true  ([] -> "" -> 0)
console.log([] === 0);   // false
console.log([1] == 1);   // true  ([1] -> "1" -> 1)
console.log([1] === 1);  // false
console.log([2] == 2);   // true  ([2] -> "2" -> 2)
console.log([2] === 2);  // false
console.log([] == false);    // true  ([] -> "" -> 0, false -> 0)
console.log([] === false);   // false
console.log([0] == false);   // true  ([0] -> "0" -> 0)
console.log([0] === false);  // false
console.log([] == ![]);      // true  (![] -> false, [] -> 0)
console.log([] === ![]);     // false
console.log([[], []] == ""); // false (toString -> ",")

// ---------- E) Objects ----------
console.log({} == "[object Object]");  // true
console.log({} === "[object Object]"); // false
console.log({} == {});    // false (different references)
console.log({} === {});   // false (different references)

// ---------- F) NaN comparisons ----------
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

// ---------- Tip ----------
// Use === in real code to avoid type-coercion surprises.

// ---------- Key Takeaway ----------
// If you want clear, predictable results, always use ===.

// ---------- Quick Interview Cheats (Very Simple) ----------
// 1) == changes types, === does NOT.
// 2) null == undefined is true.
// 3) "" == 0 is true.
// 4) false == 0 is true.
// 5) [] == 0 is true.
// 6) NaN is never equal to NaN.

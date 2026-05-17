// ============================================================
// LAB EXERCISE: All Number Types Supported in JavaScript
// File: 26_Literal_Number.js
// ============================================================
//
// In JavaScript, numbers can be written in many different forms.
// All of them belong to the "number" type (except BigInt which is
// a separate type for very large integers).
// ============================================================


// ---------- 1. INTEGER LITERAL ----------
// Whole numbers, positive or negative.
let intPositive = 100;
let intNegative = -50;
let intZero = 0;
console.log("1. Integer Literals    :", intPositive, intNegative, intZero);



// ---------- 2. FLOATING-POINT (DECIMAL) LITERAL BASE 10----------
// Numbers with a decimal point.
let pi = 3.14;
let price = 99.95;
let negativeFloat = -0.5;
console.log("2. Floating Literals   :", pi, price, negativeFloat);


// ---------- 3. EXPONENTIAL / SCIENTIFIC NOTATION ----------
// Used for very large or very small numbers.
// Format: <number>e<power of 10>
let big = 1.5e6;       // 1.5 * 10^6  = 1500000
let small = 2.5e-3;    // 2.5 * 10^-3 = 0.0025
console.log("3. Exponential Literals:", big, small);


// ---------- 4. BINARY LITERAL (Base 2) ----------
// Starts with 0b or 0B. Only digits 0 and 1.
let binary1 = 0b1010;   // 10 in decimal
let binary2 = 0b1111;   // 15 in decimal
console.log("4. Binary Literals     :", binary1, binary2);


// ---------- 5. OCTAL LITERAL (Base 8) ----------
// Starts with 0o or 0O. Digits 0-7 only.
let octal1 = 0o17;      // 15 in decimal
let octal2 = 0o755;     // 493 in decimal
console.log("5. Octal Literals      :", octal1, octal2);


// ---------- 6. HEXADECIMAL LITERAL (Base 16) ----------
// Starts with 0x or 0X. Digits 0-9 and A-F.
let hex1 = 0xFF;        // 255
let hex2 = 0x1A;        // 26
let hex3 = 0xABCDEF;    // 11259375
console.log("6. Hex Literals        :", hex1, hex2, hex3);


// ---------- 7. BIGINT LITERAL ----------
// For integers BIGGER than Number.MAX_SAFE_INTEGER (2^53 - 1).
// Add "n" at the end of the number.
let bigInt1 = 9007199254740993n;
let bigInt2 = 123456789012345678901234567890n;
console.log("7. BigInt Literals     :", bigInt1, bigInt2);
console.log("   typeof BigInt       :", typeof bigInt1);  // "bigint"


// ---------- 8. SPECIAL NUMBER VALUES ----------
// JavaScript has 3 special numeric values.
let infinityPositive = Infinity;
let infinityNegative = -Infinity;
let notANumber = NaN;             // "Not a Number"
console.log("8. Special Numbers     :", infinityPositive, infinityNegative, notANumber);

// Examples that produce these special values:
console.log("   1 / 0   =", 1 / 0);          // Infinity
console.log("   -1 / 0  =", -1 / 0);         // -Infinity
console.log("   'abc'*2 =", "abc" * 2);      // NaN


// ============================================================
// SUMMARY TABLE
// ============================================================
//
//  #  | Type          | Prefix/Suffix | Example     | Decimal Value
// ----|---------------|---------------|-------------|-------------
//  1  | Integer       | (none)        | 100         | 100
//  2  | Float         | (none)        | 3.14        | 3.14
//  3  | Exponential   | e             | 1.5e6       | 1500000
//  4  | Binary        | 0b            | 0b1010      | 10
//  5  | Octal         | 0o            | 0o17        | 15
//  6  | Hexadecimal   | 0x            | 0xFF        | 255
//  7  | BigInt        | n (at end)    | 123n        | 123 (big)
//  8  | Infinity      | (special)     | Infinity    | ∞
//  9  | NaN           | (special)     | NaN         | Not a Number
//
// ============================================================

// ---------- 9. NUMERIC SEPARATORS (for readability) ----------
// Underscores _ can be used to make big numbers easier to read.
// They have NO effect on the value.
let million = 1_000_000;
let creditCard = 1234_5678_9012_3456;
console.log("9. Numeric Separators  :", million, creditCard);


// ============================================================
// SUMMARY
// ============================================================
// Basic       : 25, 9.99, -5
// Exponential : 1e6
// Binary      : 0b1010
// Octal       : 0o17
// Hex         : 0xFF
// BigInt      : 123n
// Infinity    : 1 / 0
// NaN         : "hello" * 2
// ============================================================

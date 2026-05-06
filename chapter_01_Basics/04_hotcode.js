console.log("Hello!");

function add (a, b) {
    return a + b;
}

let result;
for (let i = 0; i < 10000; i++) {
result = add (i, i + 1);
}

console.log("After 10000 calls", result);             

// for printing source code to bytecode
// node --print-bytecode chapter_01_Basics/04_hotcode.js
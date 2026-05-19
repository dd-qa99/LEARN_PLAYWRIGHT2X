// template literal 

let lastName = "Natarajan";
let fullName = `Durga Devi ${lastName}`;
console.log(fullName);


// REAL LIFE EXAMPLE
const env = "staging";
const userId = 12345;
const apiUrl = `https://api.example.com/${env}/users/${userId}`;
console.log(apiUrl);


let env = "staging";
env = "production"; // we can reassign the value of env because it is declared with let
const userId = 12345;
const apiUrl = `https://api.example.com/${env}/users/${userId}`;
console.log(apiUrl);

// playwright
const rowIndex = 1;
const columnIndex = 2;
const columnSelector = `table tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`;
console.log(columnSelector);

// logs

const logLevel = "error";
const logMessage = "An unexpected error occurred.";
const timestamp = new Date().toISOString();

const logEntry = `[${timestamp}] [${logLevel.toUpperCase()}] ${logMessage}`;
console.log(logEntry);


// screenshot
const testName = "Login Test";
const timestamp = Date.now();
const screenshotPath = `screenshots/${testName.replace(/\s+/g, '_')}_${timestamp}.png`;

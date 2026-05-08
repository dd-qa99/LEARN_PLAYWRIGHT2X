// ===================================================
//      Naming Conventions in JavaScript
// ===================================================



var name = "durga";

var firstName = "durga";

var lastName = "devi"; // camel case notation - first letter of each word is capitalized except the first word

var fullName = "durga devi"; // this is also camel case notation - first letter of each word is capitalized except the first word

var first_name = "durga"; // snake case notation - words are separated by underscores

var last_name = "devi"; // snake case notation - words are separated by underscores

var full_name = "durga devi"; // snake case notation - words are separated by underscores


//1. camel case notation - standard convention for JavaScript
let userName = "durga";
let userAge = 30;
let userEmail = "durgadevi.qa99@gmail.com";

//2. pascal case notation - first letter of each word is capitalized
let UserName = "durga";
let UserAge = 30;
let UserEmail = "durgadevi.qa99@gmail.com";

// 3. snake case notation - (underscore seperated)
let user_name = "durga";
let user_age = 30;
let user_email = "durgadevi.qa99@gmail.com";

//4.SCREMING_SNAKE_CASE_NOTATION - (underscore seperated and all letters are capitalized)
let MAX_SIZE = "durga";
let API_KEY = "abcd4567";
let DATABASE_URL = "localhost:27017/mydb";

//5.Hungarian notation - prefixing the variable name with a lowercase letter that indicates the type of the variable
let strUserName = "durga";
let intUserAge = 30;
let strUserEmail = "durgadevi.qa99@gmail.com";
let boolIsAdmin = false;

console.log("\n ====Name Conventions==== \n");
console.log("camelCase:", userName);
console.log("PascalCase:", UserName);
console.log("snake_case:", user_name);
console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE);
console.log("Hungarian Notation:", strUserName);               

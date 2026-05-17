// template literal 

let lastName = "Natarajan";
let fullName = `Durga Devi ${lastName}`;
console.log(fullName);

const env = "staging";
const userId = 12345;
const apiUrl = `https://api.example.com/${env}/users/${userId}`;
console.log(apiUrl);
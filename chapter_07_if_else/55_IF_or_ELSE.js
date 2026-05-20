// can we add only if ?

if (true) {

}

// can we have single else - no


let n = 7;
if (n % 2 === 0) {
    console.log("The number is EVEN");
}
else {
    console.log("The number is ODD");
}

// leap year check 

let year = 2021;
if (year % 4 === 0 && year % 100 != 0) {
    console.log("This is LEAP YEAR");
}
else if (year % 400 === 0) {
    console.log("This is LEAP YEAR");
}

else {
    console.log("This is NOT A LEAP YEAR");
}
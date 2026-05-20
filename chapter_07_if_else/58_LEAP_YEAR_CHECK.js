// leap year check 

let year = 2021;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("This is LEAP YEAR");
}

else {
    console.log("This is NOT A LEAP YEAR");
}
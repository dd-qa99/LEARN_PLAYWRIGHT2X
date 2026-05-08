// ===========================================================
// identifier rules in JavaScript
// ===========================================================

// rules of identifier in JS
// 1. must begin with a letter, underscore or $
// 2. can contain letters, digits, underscores and $
// 3. are case sensitive
// 4. cannot be a reserved keyword
// 5. may contain Unicode characters

// 1. must begin with a letter, underscore or $

var $ = 10;
var _aq = 20;
var a1 = 30;
var A = 40;
var p = 11;
var a123 = 10;

//2. subsequnt characters may include digits

let item1 = 50;
let temp2 = 60;

//3. identifiers are case sensitive

var Myname = "durga"; // valid identifier - can contain letters, digits, underscores and $
var myName = "devi"; // valid identifier - can contain letters, digits, underscores and $
var MyName = "natarajan"; // valid identifier - can contain letters, digits, underscores and $
console.log(Myname !== MyName);    //true 
console.log(Myname !== myName);    //true 


// 4.cannot start with a digit    
// var 123 = 10; // invalid identifier - cannot start with a digit
// var 1a = 20; // invalid identifier - cannot start with a digit
//  var 1stName = "durga"; // invalid identifier - cannot start with a digit

//5. cannot be a reserved keyword
// var var = 10; // invalid identifier - cannot be a reserved keyword
// var let = 20; // invalid identifier - cannot be a reserved keyword
// var const = 30; // invalid identifier - cannot be a reserved keyword
// var if = 40; // invalid identifier - cannot be a reserved keyword
// var else = 50; // invalid identifier - cannot be a reserved keyword
// var for = 60; // invalid identifier - cannot be a reserved keyword


//6. may contain Unicode characters and unicode escape sequences
var 变量 = "variable"; // valid identifier - can contain Unicode characters
var \u0061 = "a"; // valid identifier - can contain Unicode escape sequences
var \u0062\u0061\u0072 = "bar"; // valid identifier - can contain Unicode escape sequences      
var café = "cafe"; // valid identifier - can contain Unicode characters

//7. cannot contain spaces and special characters, hyphen except _ and $

// let my-name = "durga"; // invalid identifier - sysntax error : unexpected token '-'
// let my subject = "durga"; // invalid identifier - syntax error : unexpected token 'subject'
// let my+name = "durga"; // invalid identifier - syntax error : unexpected token '+'
// let my*name = "durga"; // invalid identifier - syntax error : unexpected token '*'
// let my/name = "durga"; // invalid identifier - syntax error : unexpected token '/'
// let my%name = "durga"; // invalid identifier - syntax error : unexpected token '%'
// let my^name = "durga"; // invalid identifier - syntax error : unexpected token '^'
// let my&name = "durga"; // invalid identifier - syntax error : unexpected token '&'  




// var 123 = 123; // invalid identifier - cannot start with a digit

// var 1a = 20; // invalid identifier - cannot start with a digit

// var var = 30; // invalid identifier - cannot be a reserved keyword

// var a b = 40; // invalid identifier - cannot contain spaces

// var a-b = 50; // invalid identifier - cannot contain hyphens

// var a+b = 60; // invalid identifier - cannot contain plus signs

// var a*b = 70; // invalid identifier - cannot contain asterisks

// var a/b = 80; // invalid identifier - cannot contain slashes

// var a%b = 90; // invalid identifier - cannot contain percent signs

// var a^b = 100; // invalid identifier - cannot contain caret symbols

// var a&b = 110; // invalid identifier - cannot contain ampersands

// var a|b = 120; // invalid identifier - cannot contain vertical bars

// var a~b = 130; // invalid identifier - cannot contain tildes

// var a`b = 140; 
// invalid identifier - cannot contain backticks

// var a'b = 150; // invalid identifier - cannot contain single quotes

// var a"b = 160; // invalid identifier - cannot contain double quotes

// var a b c = 170; // invalid identifier - cannot contain spaces

let durga$1234 = 180;
// valid identifier - can contain letters, digits, underscores and $

var _durga = 190;
// valid identifier - can contain letters, digits, underscores and $

var $durga = 200;
// valid identifier - can contain letters, digits, underscores and $

var durga1234 = 210;
// valid identifier - can contain letters, digits, underscores and $

var durga_1234 = 220;
// valid identifier - can contain letters, digits, underscores and $

var durga$1234_5678 = 230;
// valid identifier - can contain letters, digits, underscores and $

var durga$1234_5678$ = 240;
// valid identifier - can contain letters, digits, underscores and $

var durga$1234_5678_$ = 250;
// valid identifier - can contain letters, digits, underscores and $

console.log("\n ====Valid identifiers==== \n");
console.log($);
console.log(_aq);
console.log(a1);
console.log(A);
console.log(p);
console.log(a123);

console.log("\n ==== case sensitive ==== \n");
console.log(Myname);
console.log(myName);
console.log(MyName);


console.log("\n ==== unicode identifiers ==== \n");
console.log(变量);
console.log(\u0061);
console.log(\u0062\u0061\u0072);
console.log(café);



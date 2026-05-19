console.log(Score); //ReferenceError: Cannot access 'Score' before initialization
let Score = 100;

{
// -----TDZ for score starts here -----
// console.log(Score); //ReferenceError: Cannot access 'Score' before initialization
// Score = 200; // ReferenceError: Cannot access 'Score' before initialization
// typeof Score; // ReferenceError: Cannot access 'Score' before initialization
//  -----TDZ for score ends here -----


let Score = 100; // declaration and initialization of Score variable with let. TDZ ends here. 
console.log(Score); // 100
}
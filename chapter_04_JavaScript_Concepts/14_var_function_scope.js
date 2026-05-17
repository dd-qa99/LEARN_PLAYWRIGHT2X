
var a = 10; // global scope
console.log(a); // 10



//definition of function

function printHello() {
    console.log("Hello The Testing Academy!");
    var a = 20 // this is local scope and can only be accessed within this function scope. it is not accessible outside this function.   
    console.log(a);
    if (true) {
        var a = 30; // this variable is also function scoped and gets hoisted to the top of the function scope. it is not accessible outside this function. it will override the previous variable a in the same function scope.
        console.log(a);
    }
    console.log("F ->", a); // this will print 30 because the variable a is function scoped and gets hoisted to the top of the function scope. it will override the previous variable a in the same function scope.
}
console.log("G ->", a)
printHello(); // 30 picks from the latest value of a in the function scope

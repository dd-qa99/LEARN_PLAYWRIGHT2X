var a = 10

console.log(a); // this variable is global scope and can be accessed anywhere in the program

//var is function scoped and gets hoisted to the top of its scope. 

function printHello() {
    console.log("Hello The Testing Academy!");
    var a = 20 // this is local scope and can only be accessed within this function scope. it is not accessible outside this function.   
    console.log(a);
    if (true) {
        var a = 30; // this variable is also function scoped and gets hoisted to the top of the function scope. it is not accessible outside this function. it will override the previous variable a in the same function scope.
        console.log(a);
    }
}

var a = 40;

printHello();


let a = 10; // global scope
console.log(a); // 10



//definition of function

function printHello() {
    console.log("Hello The Testing Academy!");
    let a = 20;
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}
console.log("G ->", a)
printHello();

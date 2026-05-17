function getUserStatus() {
    // var status_code; this is done by JS engine - hoisting - variable declaration is moved to the top of the function scope 
    // and initialized with undefined. so when we try to access it before initialization, it will print undefined.
    console.log(status_code);
    var status_code = 200;
    console.log(status_code);
}

getUserStatus();

/*
note : in the above code , the variable status_code is hoisted to the top of the function scope
and gets initialized with undefined. so when we try to access it before initialization,
it will print undefined. after initialization, it will print 200. this is called hoisting in JavaScript.
*/

// top of getUserStatus(), not the global scope
let rajkumar_age = 18;
{
    let rj_will_vote = rajkumar_age > 18 ? " He will vote" : "He will not vote";
    console.log(rj_will_vote);
}
{
    let rj_will_vote = rajkumar_age >= 18 ? " He will vote" : "He will not vote";
    console.log(rj_will_vote);
}
//  real world example 
//  api testing 

let actual_status_code = 200;
let expected_status_code = 200;
let test_result = actual_status_code === expected_status_code ? "PASSED" : "FAILED";
console.log(test_result);


let environment = "staging";
let baseUrl = environment === "prod" ? "http://api.example.com" : "http://staging.api.com";
console.log(baseUrl);

let isCI = true;
let browserMode = isCI ? "headless" : "headed"
console.log("Launching browser in :", browserMode, "mode");

let responseTime = 800;
let sla = 1000;
let slaStatus = responseTime < sla ? "Within SLA" : "SLA Breached";
console.log(slaStatus)

// ternary operator 
//  condition ? TRUE : FALSE ;

let condition = false;
let SKMale = condition ? true : false;
console.log(SKMale)




// nested ternary 
// multiple condition in between - rarely used 

let durga_age = 24;
can_durga_drink = durga_age > 18 ? (durga_age > 25 ? "durga can drink" : "durga cannot drink") : "No Goa";
console.log(can_durga_drink);


a += 10;
// a=+ 10;  doesnt exist 



let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Eroor " : "Server Error";
console.log(`Status ${statusCode}: ${category}`);

// Task 18 may

let a = 10; b = 20
let greatest = a > b ? "a is greater" : "b is greater";
console.log(greatest);

let a = 10; b = 20, c = 30;
let greatest = a < b ? (b < c ? "c is greatest" : "c is not not greatest") : "b is  greatest";
console.log(greatest);


let temp = 40;
let feel = temp >= 40 ? "Very Hot" :
    temp >= 30 ? "Hot" :
        temp >= 20 ? "Warm" :
            temp >= 10 ? "Chill" : "Cold";
console.log("Temparate", temp, "Feel", feel);

//  we dont use bitwise operator 
//  AND , OR , XOR , NOT , LEFT SHIFT AND RIGHT SHIFT 


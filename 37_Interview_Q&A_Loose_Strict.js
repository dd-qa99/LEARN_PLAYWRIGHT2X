console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); // transivity brokern 
// 0 == "" → true (because "" is converted to 0)
// 0 == "0" → true (because "0" is converted to 0)
// "" == "0" → false (string vs string, values differ)
console.log("" == 0);

console.log(0 == false);
console.log(null == 0);
console.log(null == undefined); // null and undefined are loosely equal to each other, but not to anything else
console.log(null === undefined); 

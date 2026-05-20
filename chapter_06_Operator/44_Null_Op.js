console.log(null >= 0); // true
console.log(null === 0); // false

// ?? This is called as nullish operator 

let amul = null;
let millk_required = amul ?? "Arogya milk"
console.log(millk_required);

let amul = "Amul is present";
let millk_required = amul ?? "Arogya milk"  // in TS it can be only one ? also 
console.log(millk_required);
let a = 10;
console.log(++a + a); //11 + 11 = 22 
console.log(a);

let b = 10;
console.log(b++ + b); // 10 + 11 = 21
console.log(b);

let c = 10;
console.log(c++ + ++c);  // 10 + 12 
console.log(c);

let d = 10;
console.log(++d + ++d);   //  D=11 d=11 D=12 d=12
console.log(d);

let e = 10;
console.log(e++ + ++e - --e + e-- + ++e); // 
// E = 10 e = 11
// E = 12 e =12
// E= 11 e = 11
// E = 11 e = 10 
// E = 11 , e = 11
console.log(e);
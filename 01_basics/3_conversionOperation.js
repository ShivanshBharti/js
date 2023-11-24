let score = "55aa";

console.log(typeof score); //result number
console.log(typeof score); //result number

let valueInNum = Number(score);

console.log(typeof valueInNum); //result number
console.log(valueInNum); //result Nan

// "50" => 50
// "50a" => NaN
//true => 1
//false => 0
//null => 0
//undefined => NaN
//" " => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn); //result boolean
console.log(booleanIsLoggedIn); //result true

// 0 => false
// 1 => true
// " " => true
// "a" => true
// "" => false

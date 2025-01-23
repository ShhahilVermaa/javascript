let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
/*
console.log(valueInNumber)
"33" =>  this gives outputs 33
"33abc" => this gives NaN (Not An Number)
true=> 1 ; false =>0
*/

console.log("----------------")
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log("----------------")
/* 
1 => true ; 0 => false 
"empty string" => false
"shahil" => true
*/
let someNumber = 309
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *****************************Operations************************
console.log(" *****************************Operations************************")

/*let value = 3
let negValue = -value
console.log(negValue) // gives the output -3
*/
let str1 = "Hello"
let str2 = " Babyy"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true) // since true gives output as 1
console.log(+"") // since "" gives output as 0

let gameCounter = 100
gameCounter++ //++gameCounter can also be done
console.log(gameCounter)
const score = 400
console.log(score) //gives output as 400

const balance = new Number(100)
console.log(balance) // gives output as [Number: 100]

console.log(balance.toString().length)//first converts the number to string then find the length
console.log(balance.toFixed(2)) //gives the decimal value upto 2 digits
const otherNumber = 23.8451
console.log(otherNumber.toPrecision(3)) //count from the first index of the number and then round off as the user gives the value
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))//this function is used to put ',' in between the 0's as per 'en-IN' means indian number system

// ---------------------Maths--------------
console.log(' ---------------------Maths-----------------')
console.log(Math) // shows that math is a object {} and this signifies that it has many functions
console.log(Math.abs(-4)) // returns the absolute value 
console.log(Math.round(4.8)) // returns the round-off
console.log(Math.ceil(4.2)) // returns the ceiling value 
console.log(Math.floor(4.9)) // returns the floor value
console.log("Min value in array is " + Math.min(4,8,5,7,9,2,5)) // returns the minimum value in array
console.log("Max value in array is " + Math.max(4,8,5,7,9,2,5)) // returns the maximum value in array

console.log(Math.random()) // gives the value between 0 to 1
console.log(Math.floor(Math.random()*10) + 1) //from this we can get the value from 1 to 10 and since floor function is assigned over here it will give floor value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // learn this formula for getting the values in between the number given
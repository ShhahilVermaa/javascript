const name = "Shahil-verma-singh"
const repoCount = 8

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

console.log("--------------")

const gameName = new String("ClashOfClans")
console.log(gameName[0]) // gives the value of 0th index
console.log(gameName.__proto__)

console.log(gameName.length) // gives the length 
console.log(gameName.toUpperCase()) // converts to uppercase
console.log(gameName.charAt(5)) //gives the value at provided index 
console.log(gameName.indexOf('n')) // gives the index of the provided value

const newString = gameName.substring(0,6) // does not obeys negative values
console.log(newString)

const anotherString = gameName.slice(-11,6) //obeys negative values
console.log(anotherString)

const newString1 = "   shahil   "
console.log(newString1)
console.log(newString1.trim()) // trims the extra space another methods are also there like trimStart() , trimEnd()

const url = "https://shahil.com/shahil%20verma"
console.log(url.replace('%20' , '-')) // replaces %20 with -
console.log(url.includes('verma'))//gives true or false

console.log(name.split('-')) //split(separator,limit)
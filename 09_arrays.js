//js create SHALLOW COPIES(A shallow copy of an object is a copy whose properties share the same refernces as those of the source object from which the copy was made)
//DEEP CPOPIES do not share the same reference

//Different ways to declare arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Hanuman" , "Shree Ram" , "Mahadev" , "Krishna"]
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr2[2])

// --------------Arrays Methods----------------

console.log("-----------Arrays Methods--------")
myArr.push(6) // inserts 6 in the end of array
myArr.push(7) // inserts 7 in the end of array
myArr.pop() // pops the last element from the array
myArr.unshift(9) // inserts the element at index 0
myArr.shift() //deletes the element at index 0

console.log(myArr.includes(7)); //gives true or false whether the element is present or not in array
console.log(myArr.indexOf(3)) //if value is not present in the array it will give index = -1 , if value is present then it will give the index of the value 
const newArr = myArr.join()

console.log(myArr)
console.log(newArr) //converts the array as string from without [] these brackets
console.log(typeof newArr) //its type is string

console.log("A" , myArr)
const myn1 = myArr.slice(1,3) //gives the output as (starting index , end index)
console.log(myn1)
console.log("B" , myArr)

const myn2 = myArr.splice(1,3)
console.log("C" , myArr) //gives the output without(starting index , end index)
console.log(myn2)
 
//----------------Part2-------------

console.log("-------------Part2-----------")

const marvel_heros = ["THOR" , "IRONMAN" , "HULK"]
const dc_heros =["BATMAN" , "SUPERMAN" , "FLASH"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros) // this adds dc_heros as the third element of marvel_heros


//for adding two arrays use concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
//another way to add arrays
const allNewHeros = [...marvel_heros , ...dc_heros]
console.log(allNewHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5,]]]
//ek array me jitna bhi subarrays hoga usko tod ke ek single subarray bnana hai then use flat (Infinity) function
const short_array = another_array.flat(Infinity)
console.log(short_array)

console.log(Array.isArray("Shahil")) // tells whether the given input is array ot not in boolean values
console.log(Array.from("Shahil")) //makes the given input in array form  and only string values as input
console.log(Array.from({name : 'Shahil'})) //interesting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
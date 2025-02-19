let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString()) //gives fri jan 24 2025 this type of output
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())// gives date as well as timing
console.log(myDate.toLocaleDateString()) // 1/24/2025 gives in this format
console.log(typeof myDate) //its a type of object

let myCreatedDate = new Date(2025,2,25)
console.log(myCreatedDate.toDateString())

let Date1 = new Date(2025,2,25,2,30)
console.log(Date1.toLocaleString())

let Date2 = new Date("2025-01-24")
console.log(Date2.toLocaleString())

let Date3 = new Date("01-24-2025")
console.log(Date3.toLocaleString())

console.log("-------Time stamp----------")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Date3.getTime())
console.log(Math.floor(Date.now()/1000))//gives the value in seconds after dividing by 1000

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) // starts from 0 means january , user confuse  na ho isiliye +1 so that exact month ka pta lg jaye
console.log(newDate.getDay()) //starts from 1 means Monday

newDate.toLocaleString('default',{
    weekday: 'long' 
})

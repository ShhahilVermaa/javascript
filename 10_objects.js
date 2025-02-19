//singleton -> Object.create

//object literals
const mySym = Symbol("key1")
const JsUser ={
    name : "Shahil", // if the value is assigned in this form we have to use JsUser.name to print it 
    "full name " : "Shahil Verma" , // if the value is assigned as String form just write JsUser["full name"] to print it
    [mySym] : "mykey1", //way  to assign a symbol
    age : 20,
    location : "Jamshedpur",
    email : "shahiljsr2503@gmail.com",
    isLoggedIn : false ,
    lastLoginDay : ["Monday" , "Sunday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name "])

console.log(JsUser[mySym]) // way to print a symbol

JsUser.email = "shahil0309@gmail.com" //way to change the previous value instead of : use =

//Object.freeze(JsUser)

//JsUser.email = "shahilkaiseho@gmail.com"    // the value of email will  not change  since iske upar humlog object ko freeze kr diye hai

console.log(JsUser)

JsUser.greeting  =  function(){
    console.log("Hello Motto")
}

console.log(JsUser.greeting()) // if we'll call the defined function like this  .greeting() then output is "undefined" and if we call the function like this .greeting then output will be "[Function (anonymous)]"

JsUser.greetingTwo  =  function(){
    console.log(`Hello Motto , ${this.name}`)
}
console.log(JsUser.greetingTwo())

//---------------Part 2-------------------
console.log("-----------Part2  singleton -> Object.create ----------")

//ways to declare an object


// const tinderUser = new Object() //singleton object  , output -> {}

const tinderUser = {} //non-singleton object ,output -> {}
tinderUser.id = "123abc"
tinderUser.name = "Shahil"
tinderUser.isLoggedIn =  false
console.log(tinderUser)

//nested objects
const regularUser = {
    email : "someone@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "Shahil" ,
            lastname : "Verma"
        }
    }
}
console.log(regularUser.fullname.userfullname)

//ways  to add objects its same as adding arrays
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4} //same array wala concept
console.log(obj3)

const users = [
    {
        id: 1,
        email: "shahil@jsr250.@gmail.com"
    },
    {
        id: 1,
        email: "shahil@jsr250.@gmail.com"
    },
    {
        id: 1,
        email: "shahil@jsr250.@gmail.com"
    },
]
users[1].email

console.log(tinderUser) //gives an array as output with keys and values both
console.log(Object.keys(tinderUser)) //gives an array as output with only keys
console.log(Object.values(tinderUser)) //gives an array as output with only values
console.log(Object.entries(tinderUser)) //gives an array with separate keys and values within an array
console.log(tinderUser.hasOwnProperty("isLoggedIn")) //gives the output in boolean value 

//------------Part3---------------
console.log("-------Part3---------")

const course = {
    coursename : "javascript" , 
    price: "free",
    courseInstructor: "krishna"
}
//course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor)
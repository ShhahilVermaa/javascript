// definition of function

/*function sayMyName(){
    console.log("Sorry")
    console.log("Sorry")
    console.log("Sorry")
    console.log("Sorry")
    console.log("Sorry")
}
sayMyName() //calling of function no need of console.log()
*/

/*function addTwoNumbers(num1 , num2)
{
    console.log(num1 + num2)
}
addTwoNumbers(3,4)*/

function addTwoNumbers(num1 , num2)
{
    let result = num1 + num2;

   // console.log("hey") //this will get print because it is above the return

    return result

    console.log("Yoo") //this will not get print since after return value inside a function console does not work
}
const result = addTwoNumbers(3,4)
console.log("Result "  ,result)

function LoginUser(username){
    if(username === undefined){  // or else if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(LoginUser("Shahil")) //o/p : Shahil just logged in
console.log(LoginUser("")) //o/p : just logged in
console.log(LoginUser()) //o/p : undefined just logged in

// --------- Part 2 ------------
console.log("---------Part 2----------")

function calculateCartPrice(...num1) // ... known as spread operator and rest operator , packs the value in form of arrays
{
    return num1
}
console.log(calculateCartPrice(200,400,600))

function calculateCartPrice2(val1 , val2 , ...num1) 
{
    return num1
}
console.log(calculateCartPrice2(200,400,600,2000)) //val1 me store hoga 200 , val2 me store hoga 400 , baki bacha kucha jayega ...num1 me

const user = {
    username : "Shahil" ,
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
//another way to do
handleObject({
    username : "Verma",
    price: 500
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
//another way
console.log(returnSecondValue([200,400,600,800]))
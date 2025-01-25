// Stack(Primitive)  Heap(Non - Primitive)

let myName = "Shahil Verma"
anotherName = myName
anotherName = "Shahil Singh"

console.log(myName)
console.log(anotherName)
//gives the copy of one to another like the value assigned in myName gives its value's copy to anotherName
console.log("------------- Stack example is above and heap example is below")

let UserOne = {
    email: "user@gamil.com",
    upi: "user@byl"
}
let UserTwo = UserOne

UserTwo.email = "abc@gmail.com" //if we are changing the email value then it will change for UserOne also since both are having the same reference
//user one values get stored in heap when we assign UserTwo = UserOne then UserTwo gets the reference of the value not its copy
console.log(UserOne.email);
console.log(UserTwo.email);



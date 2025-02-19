//making an object
const user = {
    username : "Shahil" ,
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); //prints the current value 
    }
}
user.welcomeMessage();
user.username = 'Aasthu'
user.welcomeMessage();

console.log(this); //this will print {} empty object
//browser ke andar global object is [Window]

function wow(){
    let username = "shahil"
    console.log(this.username);// gives undefined since (this) works only under object not in functions 
}
wow()

//********Arrow function***********

const yes = () => {
    let username = "shahil"
    console.log(this.username); // prints undefined
    console.log(this); //prints empty object {}
}
yes()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));
 
// another way known as implicit function
//Agar {ye use krenge to return value dalna hoga} aur agar (ye use krenge to return value use krne ka zarurat nahi hai)
const add = (num1 , num2) => (num1 + num2)
console.log(add(3,4));

//Immediately Invoked Function Expressions (IIFE)

//global scope se polution hota hai kai baar to uske pollution ko hatane ke liye IIFE ka use kiye hai

(function yoo(){ //this is named IIFE
    console.log(`DB connected`);
})(); 

// to end IIFE we should use ; this

( (name) => { //this is unnamed IIFE
    console.log(`DB connected Two ${name}`);
}) (`shahil`);
//for of

const arr = [1, 2, 3, 4, 5]
for (const element of arr) {
    console.log(element);
}
const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}

//Maps(always prints unique values does not prints repeated values)

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Fr' , "France")
//direct printing
console.log(map)
//printing by using forof
for (const [key , value] of map) {
    console.log(key, ':-' , value);
}

/*const myObject = {
    'game1' : 'WWE2k23' ,
    'game2' : 'GTAV'
}
for (const [key , value] of myObject) {
    console.log(key , ':-' , value); //this will show that myObject  is not iterable
}*/
//for printing objects instead of forof we use forin
const myObject = {
    js : 'javascript' ,
    cpp : 'C++' ,
    rb : 'ruby' ,
    swift : 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shotcut is for ${myObject[key]}`);
    
}

//********forEach**********
const coding = ["js", "ruby", "java", "python", "c++"]
/*coding.forEach(function (val){
    console.log(val);
})*/
//another way 
coding.forEach((val) => {
    console.log(val);
    
})
//another way
coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
    
})

const myCoding =[
    {
        languageName : "JavaScript" ,
        langueageFileName : "js"
    },
    {
        languageName : "Python" ,
        langueageFileName : "py"
    },
    {
        languageName : "Cascading Style Sheet" ,
        languageFileName : "css"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
}) //forEach does not return any value if we will write return item for eg it will print undefined

//**************Filter*********
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNums.filter((num) => num > 4 )
console.log(newNum);

//another way
const newNums = myNums.filter((num) => {
    return num > 4
})
console.log(newNums);


const books = [
    { title : 'Book1' , genre : 'fiction' , publish : 1981 , edition : 2004} ,
    { title : 'Book2' , genre : 'non-fiction' , publish : 1991 , edition : 2008} ,
    { title : 'Book3' , genre : 'History' , publish : 1995 , edition : 2012} ,
    { title : 'Book4' , genre : 'Science' , publish : 1999 , edition : 2014} ,
    { title : 'Book5' , genre : 'fiction' , publish : 1978 , edition : 2024} ,
]

let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => bk.publish >= 1995)
console.log(userBooks);


//*********chaining*********
const UrNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
//const newNumss = UrNums.map((num) => num + 10)

const newNumss = UrNums
                        .map((num) => num*10)
                        .map((num) =>num+1)
                        .filter((num) => num >= 40)
console.log(newNumss);


const num = [1 , 2, 3]
/*const myTotal = num.reduce(function(acc , currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    
    return acc + currval
} , 0) // callback function ke andar accumulator, currenvalue likha hua hai
 */
const myTotal = num.reduce((acc,curr) => acc + curr , 0)
console.log(myTotal);

const myShoppingCart = [
    {
        itemName : "js course" ,
        price : 2999
    },
    {
        itemName : "py course" ,
        price : 999
    },
    {
        itemName : "java course" ,
        price : 3999
    },
    {
        itemName : "data science course" ,
        price : 4999
    }
]

const PriceToPay = myShoppingCart.reduce((acc , item) => acc + item.price ,0 )

console.log(PriceToPay);

//for
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(element);
}

for (let i = 0; i < 10 ; i++){
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop  ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
}    

let myArr = ["honeysingh" , "badshah" , "mC stan"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// break and continue
console.log("-----------Break and Continue------------")
for (let i = 0; i < 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${i}`);
}

for (let i = 0; i < 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}

//while
console.log("---------------While-----------------")
let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`)
    index = index + 2
}

let myArray = ["honeysingh" , "badshah" , "mC stan"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1;
}

let score = 1
do{
    console.log(`Score is ${score}`);
    score++
}while(score <= 10);

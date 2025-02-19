let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner : " , a)
}

console.log(a)
//console.log(b)

function one(){ //first function
    const username = "Shahil"

    function two(){ //second function
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)  //this will give error

    two()
}
one()

//******************INTERESTING********************
//console.log(addone(5)) //this will get executed 
function addone(num){
    return num + 1;
}
console.log(addone(5))

//addTwo(5) //this will give error since we are declaring it and holding at the same time
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))
console.log("2" > 1)
console.log("02" > 1)

console.log("-------")

console.log(null > 0)
console.log(null == 0) // the reason is that an equality check == and comaprisons > < >= <= work differently Comparisons convert null to number, treating it as 0 thats why null >= 0 is true , null > 0 false
console.log(null >= 0)

console.log("-------")

console.log(undefined > 0)
console.log(undefined == 0) 
console.log(undefined < 0)

// === doesnt works if datatype is different
console.log("-------")

console.log("2" === 2)
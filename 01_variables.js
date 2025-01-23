const accountId = "0925"
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState /*since the value is not assigned in variable it will be termed as undefined in table
after changing the values
 
accountId="84545"  it will not change because const cannot be changed it is fixed 
*/
accountEmail = "def@gmail.com"
accountPassword = "5678"
accountCity = "JSR"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// Note : Prefer not to use var because of issue in block scope and functional scope , only use const and let
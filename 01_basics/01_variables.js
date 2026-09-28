const accountId = 3434567
let accountEmail = "adityagmail.com"
var accountPassword = "12345"
/*
avoid using var ,because of issue in block scope and functional scope.
*/
accountCity = "Bangalore"
//accountId = 876543
accountEmail = "adikgmail.com"
accountPassword = "67890"
accountCity = "Mumbai"
let accountState ;

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
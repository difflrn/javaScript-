console.log(Math.random()) ; // 0 to 1
console.log(Math.random() *10 ) ; // 0 to 10
console.log(Math.random() *10  + 1) ; // 1 to 10
console.log(Math.floor(Math.random() *10  + 1) ) ; // 1 to 10 rounded down to nearest integer

let min = 1 ;
let max =  6 ;

console.log(Math.floor(Math.random() * (max - min + 1) + min ) ); // 1 to 6)
let score = "33abs" ;
console.log( typeof score) ; // 'number'
console.log(typeof(score)) ;
// data conversion from string to number 
let valueInNumber = Number(score) ;
console.log(valueInNumber) ; // NaN -> Not a Number ;
console.log(typeof valueInNumber) ; // 'number'

// "33 => 33"
//"33abc" => NaN
//true => 1 , false => 0
// 1=> true , 0 => false

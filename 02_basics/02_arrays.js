const marvel_heros =[ "thor" ,"ironman" ,"spiderman"];
const dc_heros = ["superman" , "flash" ,"batman"] ;
//marvel_heros.push(dc_heros) ;
//console.log( marvel_heros) ;
//console.log(marvel_heros[3]); // dc_heros array is a element in marvel_heros arrays after pushing into it mean array is an element of array
//console.log(marvel_heros[3][1]);  // not a good practice ,not recommended

// 
//let allHeros  = marvel_heros.concat(dc_heros);
//console.log("a" ,allHeros) ; // concate returns a new array 


// const all_new_heros = [...marvel_heros ,...dc_heros] ; // this method is called spread 
// console.log(all_new_heros) ;

// const numArray = [ 1,2,3,[3,4,[4,5,],5],6,7,[7,8,[8,9,],1,2,3],4,5,6,7];
// // we want that all the element of tha arrya should be in single array 
// // so we will use flat to flaten the array .
// const newNumArray = numArray.flat(3) ; // 3 is the depth of nested array ,we can wright there infinity som it will flat maximum depth array into flat array
// console.log(newNumArray) ;



// console.log(Array.isArray("hello")) ;
// console.log(Array.from("hello")) ;
// console.log(Array.from({name:"Hello"})) ;// need to focus here  , we have to define either we want key`s array or value`s array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) ;
// or you can store it too 
let score = Array.of(score1,score2,score3) ;
console.log(score) ;
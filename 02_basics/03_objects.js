//oblect literals 


const mySym1 = Symbol("key1") ;
const mySym2 = Symbol("key2") ;
const myUser = {
       name : " Brain"  ,
       "full name " : " J F Kennady " ,
        mySym1: "newKey1" ,
        [mySym2]: "newKey2" ,
      // [mySym] : "newKey1" ,
       age : 34  ,
       email :"braingmail.com" ,
       address : "NewYork " 
}
// console.log(myUser.name) ;  // Aam jindagi 

// console.log(myUser["name"]) ; // mentos jindagi

// //console.log(myUser.full name ) ; ??  // aam jindagi vale fas gaye yha 
//console.log(myUser["full name "]) ;    // mentos jindagi vale access kr lenge full name ko 
console.log(myUser.mySym1) ;
console.log(typeof mySym1) ;
console.log(myUser[mySym2]) ;
console.log(typeof mySym2) ;

// myUser.email ="jfkgmail.com" ;
// Object.freeze(myUser) ;// myUser object freez ho chuka hai isliye usme ab kooi changes nhi ho skta hai   
// myUser.email ="trumpgmail.com" ;
// console.log(myUser);
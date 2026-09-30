// singleton 
// const tinderUser = new Object () ; // singleton object 
// const tinderUser = {} ;             // non-singleton object

const obj1 = { 1: "a" , 2:"b"};
const obj2 = { 3: "c" , 4:"d"};
const obj4 = { 5: "e" , 5:"f"};
// method1 
// const obj3 = Object.assign( obj1, obj2 ) // yha obj2 ,obj1 me store ho rha hai and obj1 ,obj3 ke jjagah pr  return ho rha hai 


// method2
//                         target , source1 , source2 , source3 ......
// const obj3 = Object.assign({} , obj1, obj2 ,obj4) ;

// method3 -> spread method  ( most frequent used method even on the production level)
const obj3 = {...obj1,...obj2,...obj4} ;
console.log(obj3) ;
//Immediately Invoked Function Expression
// ------Normal Function-----

// function chai () {
// console.log("DB connected ");
// }
// chai() ;

//---------How to write IIFE
(function chai () {
console.log("DB connected ");
})(); 
// ; is must here to  stop the execution of this function 
//          ()()
// definition ,execution
(() => {
    console.log("db connected");
})();

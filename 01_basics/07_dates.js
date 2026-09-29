// dates 
// let myDate = new Date() ; 
// console.log(myDate.toDateString()) ;          // Tue Sep 29 2026
// console.log(myDate.toISOString()) ;           // 2026-09-29T09:51:46.431Z
// console.log(myDate.toJSON()) ;                // 2026-09-29T09:51:46.431Z
// console.log(myDate.toLocaleDateString()) ;    // 9/29/2026
// console.log(myDate.toLocaleString()) ;        // 9/29/2026, 9:51:46 AM .
// console.log(myDate.toLocaleTimeString()) ;    // 9:51:46 AM
// console.log(myDate.toString()) ;              // Tue Sep 29 2026 15:02:46 GMT+0530 
// console.log(typeof myDate) ;                  // object


// let myCreatedDate = new Date(2026,8,29);          // months are zero base indexing so 8 means september
// console.log(myCreatedDate.toDateString()) ;          // Tue Sep 29 2026

let myCreatedDate = new Date("2025-01-1") ;
let myTimeStamp = new Date.now(0) ;  //
console.log(myCreatedDate);     // 2025-01-01T00:00:00.000Z
console.log(myTimeStamp);       // 1970-01-01T00:00:00.000Z
console.log(Date.now(0));
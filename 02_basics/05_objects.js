

// create a object 

const course = {
    courseName : " javaScript ",
    price : "999",
    courseInstructor: "xyz"
}
// de-structuring the object 
const { courseInstructor : instructor} = course ;

//console.log( courseInstructor) ;
console.log(instructor) ;


//JSON file  -> this is the JSON file .....ham jab v API call krte hai to isi formate me data hame milta hai and after thta we store them in variables and use them 
// {
//     name: "aditya" ,
//     age : 20 ,
//     college :"xyz" 
// }
// JSON could be in array formate also 
// [
//     {}, //objects 
//     {}, // objects 
//     {},
//     {},
//     {}
// ]
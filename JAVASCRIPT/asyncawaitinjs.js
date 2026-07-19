// async function greet() {
// // return "Rohit";
// return new Promise((resolve,reject)=>{
//     resolve("Rohit");
    
// })
    
// }
// const response=greet();
// response.then((data)=>console.log(data))
// response .catch((error)=>{
//     console.log("Error:",error);
// })

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
//  this format is not user freiendly...


async function github() {
    

const respondse=await fetch("https://api.github.com/users");
const data=await respondse.json();
console.log(data);
// this is so easy format ...but program freezing issue occured ... 
}
github();
console.log("kaise ho ");

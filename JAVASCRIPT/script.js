// let name = "Priyanshu";
// let cgpa = 8.22; 
// console.log(`my name is ${name} and my cgpa is ${cgpa}`);

// let skill = "Electrician";
// let wage = 900;
// console.log(`my skill is ${skill} and my wage is ${wage}`);

// const student = {
//     name: "Monu",
//     college: "NIT SILCHAR"
// };
// console.log(`${student.name} studies at ${student.college}`);

// const worker = {
//     name: "Ramesh",
//     skill: "Plumber",
//     wage: 800
// };

 //const {name, skill , wage}=worker; // what i am doing here is i am destructuring the worker object and extracting the values of name, skill and wage properties and storing them in variables with the same name. This way i can access the values of these properties directly without having to use the dot notation every time. It makes my code cleaner and more readable.what destructuring does is it allows us to extract values from objects or arrays and assign them to variables in a more concise and readable way. It helps to reduce the amount of code we need to write and makes it easier to work with complex data structures. In this case, we are destructuring the worker object and extracting the values of name, skill and wage properties and storing them in variables with the same name. This way we can access the values of these properties directly without having to use the dot notation every time. It makes our code cleaner and more readable.
//  console.log(name)
//     console.log(`my name is ${name} and my skill is ${skill} and my wage is ${wage}`);

//     const nums1 = [1,2,3,4,5];
//     const result= nums1.map(num=>num*num); // map is a higher order function that takes a callback function as an argument and returns a new array with the results of calling the callback function on each element of the original array. In this case, we are using the map function to square each element of the nums1 array and return a new array with the squared values. The callback function is an arrow function that takes a num as an argument and returns num*num, which is the square of the num. The result is a new array [1,4,9,16,25] which contains the squared values of the original array. 
    // console.log(result);

    // const nums = [5,8,12,15];
    // const ans=nums.find(num=>num>10); // what find does is it returns the first element in the array that satisfies the provided testing function. In this case, we are using the find function to find the first element in the nums array that is greater than 10. The callback function is an arrow function that takes a num as an argument and returns true if num is greater than 10, and false otherwise. The find function will return the first element that satisfies this condition, which is 12 in this case. If no element satisfies the condition, it will return undefined. So the output of console.log(ans) will be 12.


    // console.log(ans);

    // const x= nums.filter(num=>num>10); // what filter does is it creates a new array with all elements that pass the test implemented by the provided function. In this case, we are using the filter function to create a new array that contains only the elements of the nums array that are greater than 10. The callback function is an arrow function that takes a num as an argument and returns true if num is greater than 10, and false otherwise. The filter function will iterate through each element of the nums array and apply the callback function to it. If the callback function returns true for an element, that element will be included in the new array. If it returns false, that element will be excluded from the new array. So the output of console.log(x) will be [12,15] which are the elements of the nums array that are greater than 10.
    // console.log(x);

    // the callback hell is a situation where we have multiple nested callbacks in our code, which can make it difficult to read and maintain. It often occurs when we have asynchronous operations that depend on the results of previous operations. This can lead to a situation where we have multiple levels of nesting, making the code harder to understand and debug. To avoid callback hell, we can use promises or async/await syntax, which allows us to write asynchronous code in a more linear and readable way.

//     const students = [
//         {name:"A", cgpa:8.0},
//         {name:"B", cgpa:9.2},
//         {name:"C", cgpa:7.5}
//     ];

    // const topStudents=students.filter(student=>student.cgpa>8.0);
    //console.log(topStudents); // the syntax of the filter function is as follows: array.filter(callback(element, index, array), thisArg). The callback function is a function that is called for each element in the array. It takes three arguments: the current element being processed, the index of the current element, and the array that filter was called on. The thisArg is an optional argument that can be used to specify the value of this inside the callback function. In this case, we are using the filter function to create a new array that contains only the students whose cgpa is greater than 8.0. The callback function is an arrow function that takes a student as an argument and returns true if student.cgpa is greater than 8.0, and false otherwise. The filter function will iterate through each element of the students array and apply the callback function to it. If the callback function returns true for an element, that element will be included in the new array. If it returns false, that element will be excluded from the new array. So the output of console.log(topStudents) will be [{name:"B", cgpa:9.2}] which is the student whose cgpa is greater than 8.0.

    // function myname(){
    //     console.log("My name is Priyanshu");
    // }
    //  setTimeout(myname, 3000);

     const promise1 = new Promise((resolve,reject)=>{
        resolve("Hello World");
    }); 
    // promise.then((message)=>{
    //     console.log(message);
    // })

    // const promise = new Promise((resolve,reject)=>{
    //     resolve("Hello World");
    // });
    // setTimeout(()=>{
    //     resolve("Hello World");
    // },3000);
    // promise.then((message)=>{
    //     console.log(message);
    // }   );


    // async function getdata(){
    //     setTimeout(function() {
    //         console.log("Data fetched successfully")
    //     }, 3000);
    // }
    // getdata();
    // what asysn function do is it allows us to write asynchronous code in a more synchronous way. It makes our code easier to read and understand. When we use the async keyword before a function, it means that the function will return a promise. We can then use the await keyword inside the function to wait for the promise to resolve before moving on to the next line of code. This way, we can write code that looks like it's executing sequentially, even though it's actually running asynchronously.its use is to handle asynchronous operations more efficiently and to avoid callback hell. It allows us to write cleaner and more readable code when dealing with promises and asynchronous tasks.


async function getdata() {
    let response= fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}
 // the output of this code will be a Promise object. This is because the fetch function returns a promise that resolves to the response of the HTTP request. Since we are not using the await keyword to wait for the promise to resolve, the getdata function will return immediately with a promise object, and the console.log statement will log that promise object to the console. To get the actual response data, we would need to use await or .then() to handle the promise returned by fetch.
   


 //CRUD in DOM
 const newelement=document.createElement("h2");
 newelement.textContent="strike is coming";
//  console.log(newelement);

 //select element
//  const element=document.getElementById("first");
//  element.after(newelement);


// const list = document.createElement("li");
// list.textContent = "Milk"
// const list2 = document.createElement("li");
// list2.textContent = "Cake"

// const list3 = document.createElement("li");
// list3.textContent = "Halwa"

// const list4 = document.createElement("li");
// list4.textContent = "Paneer"

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list, list2);
// unorderElement.prepend(list3); // isse list3 element ko list ke starting me add kr dega
// unorderElement.children[1].after(list4);// isse list4 element ko list ke second position me add kr dega


const arr = ["Milk", "Halwa", "Paneer","tofu","Tea"];
const unorderElement=document.getElementById("listing"); 
const fragment=document.createDocumentFragment(); // ye ek temporary container hai jisme hum elements ko add kar sakte hain aur phir ek hi baar me unorderElement ke andar add kar sakte hain. isse performance improve hoti hai kyunki har baar reflow and repaint nahi hota.
// for(let food of arr){
//     // console.log(food);
//     const x=document.createElement("li");
//     x.textContent=food;
//     unorderElement.append(x);


// }

// for(let food of arr){
//     // console.log(food);
//     const x=document.createElement("li");
//     x.textContent=food;
//     fragment.append(x);
// }
// unorderElement.append(fragment); // isse fragment ke andar jo bhi elements hain wo unorderElement ke andar add ho jayenge. ye isliye kiya jata hai ki performance improve ho sake. agar hum directly unorderElement ke andar elements add karte to har baar reflow and repaint hota jo ki performance ko affect karta. isliye hum fragment ke andar elements add karte hain aur phir ek hi baar me unorderElement ke andar add kar dete hain.

// const s1=document.getElementById("first");
// s1.remove(); // isse s1 element ko remove kar dega. ye isliye kiya jata hai ki agar hum kisi element ko remove karna chahte hain to hum uske parent element ke andar se remove karte hain. isse performance improve hoti hai kyunki har baar reflow and repaint nahi hota.


// EVENTS 

// const button=document.getElementById("btn");
// button.addEventListener( "click",function(){
//     console.log("button clicked");

// }); // function ko event listener ke andar pass kiya jata hai. ye function tab call hota hai jab button click hota hai. isse hum button click hone par kuch action perform kar sakte hain.callback function is a function that is passed as an argument to another function and is executed after some kind of event or action has occurred. In this case, the callback function is the anonymous function that is passed as the second argument to the addEventListener method. This function will be executed when the "click" event occurs on the button element. Callback functions are commonly used in JavaScript for handling asynchronous operations, such as event handling, API calls, and timers. They allow us to define what should happen after a certain action has taken place, making our code more flexible and modular.

// button.addEventListener("click",()=>{
//     console.log("button clicked");  
//});// arrow function ko event listener ke andar pass kiya jata hai. ye function tab call hota hai jab button click hota hai. isse hum button click hone par kuch action perform kar sakte hain. arrow function is a shorthand syntax for writing functions in JavaScript. It allows us to write functions in a more concise and readable way. In this case, we are using an arrow function as the callback function for the "click" event on the button element. The arrow function takes no parameters and simply logs "button clicked" to the console when the button is clicked. Arrow functions are commonly used in JavaScript for handling events, callbacks, and other situations where we need to define a function quickly and easily.

//COMMON EVENTS ARE:

// button.addEventListener("click",()=>{
//     console.log("button clicked");
// })


// button.addEventListener("dbclick",()=>{
//     console.log(" doubleclicked");
// })


// button.addEventListener("mouseover",()=>{
//     console.log("mouse entered ");
// })


// button.addEventListener("mouseleave",()=>{
//     console.log("mouse left ");
// })

// button.addEventListener("keydown",()=>{
//     console.log(" key pressed ");
// })


const input=document.getElementById("name");
input.addEventListener("input",()=>{
    console.log(input.value);
});

// every event passes an event object to the callback function. This object contains information about the event that occurred, such as the type of event, the target element, and any additional data associated with the event. We can use this event object to access properties and methods related to the event, such as preventing default behavior or stopping propagation. In this case, we are not using the event object, but we could access it by adding a parameter to the callback function, like so: input.addEventListener("input",(event)=>{ console.log(event.target.value); });


// button.addEventListener( "click",(event)=>{
//     // console.log(event.target);
//     console.log(event.type);

// });
//event.target tells you which element triggered the event.

//Changig text on clicke
const title=document.getElementById("title");
const btn=document.getElementById("btnx");

const button=document.getElementById("btx");
button.addEventListener("click",()=>{
    title.textContent="Welcome Priyanshu ";

});


button.addEventListener("click",()=>{
    document.body.style.backgroundColor="lightblue";

}); 
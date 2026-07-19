// let name="priyanshu kuamr";
// let college="NIT SILCHAR";
// let cgpa=8.22;
// let isGraduated=true;
//  console.log("My name is "+name+" and I am a student of "+college+". My CGPA is "+cgpa+" and it is "+isGraduated+" that I have graduated.");

// let  salary=90000;
//   salary+=10000;
//  console.log("My salary is "+salary);

//   let InitialBalance = 1000
//  let Deposit = 500
//   let totalbalance= InitialBalance + Deposit;
// console.log("Total balance is "+totalbalance);

// let Laptop = 50000
// let Mouse = 1000
// let Keyboard = 2000
// let totalprice= Laptop + Mouse + Keyboard;;
// console.log("Total price of Laptop, Mouse and Keyboard is "+totalprice);



// let a = 10;
// b = 20;

// console.log(a);
// console.log(b);

// console.log(globalThis.a);
// console.log(globalThis.b);

// let c="123a9";
// let x=Number(c);
// console.log(x); // NaN
// console.log(0/0); // NaN type of NaN is number 

// let d=true ;
// let p=Number(d);
// console.log(typeof p); // 1

// let k=2;
// let l=Boolean(k);
// console.log( typeof l); 

// console.log(Boolean("")); // false

// let w=2.0;
// let w1=3.8;
// let w3=w+w1;
// console.log(w3==5.8); // true 


let w=0.1;
let w1=0.2;
let w3=w+w1; 
console.log(w3); // 0.30000000000000004
console.log(w3==0.3);// false because of precision issue in floating point arithmetic in js and other programming languages.

// let a20="0.2";
// let b20="0.1";
// // let c20=Number(a20)+Number(b20);
// let c20 =a20+b20;
// console.log(c20); // 0.20.1 because of string concatenation

// let x3 = 0.1 + 0.2;

// console.log(Number(x3.toFixed(1)));
// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(null==0);// false
// console.log(null==true);// false
 // console.log(null==false );// false

// 1 is loosely equal to undefined only 

// when ther is sign of > < >= <=  the null converted into number 0 and  (undefined is converted to NaN )then comparison is done.

// console.log(null>0); // false
// console.log(null<0); // false
// console.log(null>=0); // true
// console.log(null<=0); // true

// console.log("Rohit"> "Mohit"); // true 
// console.log(10== "10");
// jab v kisi ek type ka comparison ho raha hai to type conversion hoga aur string ko number me convert karke comparison hoga. dono number me hi convert hike compare hoga if different type ka ho to 
// console.log(null>="");

// console.log(NaN==NaN); // false yaad rkhna hai.....

// let a2=10;
// let b2=0;
//  console.log(a&&b2);

//  console.log(true&& false );
//  console.log(false&& false );
//  console.log(false&& true );

//  console.log(true|| false ); 
//  console.log(false|| false );
//  console.log(false|| true );
//  console.log(true || true );
 
 let ae=23.54543;
 console.log(ae.toFixed(2)); // 23.55
ae.toFixed(2); // 23.55 but it is not changing the value of ae it is just returning a new string with 2 decimal places. to change the value of ae we have to assign it to a new variable or reassign it to ae itself.
console.log(ae); // 23.54543  
console.log(ae.toString()); // "23.54543" it is converting the number to string.
 

// let pe=new Number(10);
// console.log(typeof pe); // object
// console.log(pe instanceof Number); // true
// console.log(pe);

// let pe1=new Number(10);
// console.log(pe==pe1); // false because they are different objects


 let obj1 = {
    name: "Monu"
 }
 let obj2={
    name: "Monu"
 }

//  console.log(Math.abs(-5)); // 5
//  console.log(Math.sqrt(16)); // 4
//  console.log(Math.pow(2,3)); // 8
//  console.log(Math.max(10,20,5)); // 20
//  console.log(Math.min(10,20,5)); // 5
//  console.log(Math.random()); // random number between 0 and 1 [0,1) 
//  console.log(Math.LN10);
//  console.log(Math.PI);
//  console.log(Math.ceil(4.2)); // 5
//  console.log(Math.floor(4.8)); // 4
//  console.log(Math.log10(100)); // 2   base 20 is not defined in math object in js but we can calculate it using log function as log10(x) = log(x)/log(10)



console.log(Math.floor(Math.random()*6)+1);  // 1 to 6 random value 
// math.random()*total no. of outcome + starting point of outcome range 

// for 15-25
// console.log(Math.floor(Math.random()*11)+15); // 15 to 25 random value  here 11 is total no. of outcomes . 

// OTP GENERTION 4 digit ie: 1000 -9999 
console.log(Math.floor(Math.random()*9000)+1000); // 4 digit OTP generation

const str1=`hi  my name is Priyanshu 
kumar`; // but u cannot change the line when you use " " ..so modern javascript me template literal use krte hain jisme backtick ka use hota hai aur usme multiline string bhi likh sakte hain. 
console.log(str1);

const date=18;
console.log(`Today is ${date}th June`); // template literal me ${} ka use karke variable ko string me embed kr skte hain. 
// string is immutable.

str2=" hi my name is priyanshu kumar";
console.log(str2.indexOf("priyanshu")); // 11
console.log(str2.lastIndexOf("priyanshu"));

console.log("rohit"+43);
console.log(str2.replace("priyanshu","monu")); // it will replace the first occurrence of priyanshu with monu and return a new string. it will not change the original string str2 because string is immutable.

const user ="   monu ";
console.log(user.trim()); // it will remove the leading and trailing whitespace from the string and return a new string. it will not change the original string user because string is immutable.

//split method se hum string ko array me convert kr skte hain. split method ke andar hum separator specify krte hain jiske basis pe string ko split krna hai. agar hum separator me space specify krte hain to string ke words alag alag array ke elements ban jayenge. agar hum separator me empty string specify krte hain to string ke har character alag alag array ke elements ban jayenge. agar hum separator me kuch bhi specify nahi krte hain to pura string ek hi element ke roop me array me store ho jayega.


const now=new Date();
// console.log(now); // current date and time 
//UTC is Coordinated Universal Time, which is the primary time standard by which the world regulates clocks and time. It is the same worldwide and does not change with the seasons. It is often used as a reference time for other time zones around the world. In JavaScript, the Date object uses UTC as its default time zone, but it can also be set to use the local time zone of the user's device.

console.log(now.toString()); // current date and time in string format  // toString method se hum date object ko string me convert kr skte hain. it will return a string representation of the date object. it will not change the original date object now because date object is mutable.
// ye time system clock ke hisab se change hota rahega jab bhi aap is code ko run karoge to current date and time print hoga.
console.log(now.toLocaleString()); // current date and time in local string format  // toLocaleString method se hum date object ko local string me convert kr skte hain. it will return a string representation of the date object in the local time zone. it will not change the original date object now because date object is mutable.
console.log(now.getDate());
console.log(now.getMonth()+1); // month index 0 se start hota hai isliye +1 krna padta hai.
console.log(now.getDay());
console.log(now.getFullYear());// current year

// year month date hoour minute second millisecond
const now1= new Date(2026,5,20,17,59,0); // month index 0 se start hota hai isliye 5 means june
console.log(now1.toString()); // specific date and time print hoga.
 
// 1 jan 1970 se ye millisecond wala clock chl rha hai 

const date5 = new Date("2026-01-01T00:00:00");
const date6 = new Date("2026-01-04T12:30:45"); // Olympics 2029 start hone ki date.

const date7 = date6-date5;
const days= Math.floor((date7/(1000*60*60*24))); // milliseconds to days conversion
const hours = Math.floor((date7/(1000*60*60))%24); // milliseconds to hours conversion
const minutes = Math.floor((date7/(1000*60))%60); // milliseconds to minutes conversion
const seconds = Math.floor((date7/(1000))%60); // milliseconds to seconds conversion
console.log(`Olympics will start in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`); // template literal

const x2=Date.now();
console.log(x2); // current date and time in milliseconds since 1 jan 1970





    //console.log(obj1==obj2); // false because they are different objects
// let x = 10;

// {
//     let x = 20;
//     console.log(x);
// }

// console.log(x);


// let Name="priyanshu kumar"
// let Age=22
// let CGPA=8.22
// let IsPlaced= true

// console.log(typeof Name)
// console.log(typeof Age)
// console.log(typeof CGPA)
// console.log(typeof IsPlaced)

// console.log(typeof "100");
// console.log(typeof 100);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);


// let student= {
//     name :"Gabru",
//     age:4,
//     college: "nit dholakpur"

// };
// console.log(student);

// let x1=["monu", "is"," student"]
// console.log(x1);


// console.log(typeof {
//     name:"Rahul"
// });
// let x;

// console.log(x);
// console.log(typeof x);

// let username = "admin";
// let password = "1234";

// let enteredUsername = "admin";
// let enteredPassword = "1234";

// if(username=== enteredUsername && password ===enteredPassword){
//     console.log("login successfull");

// }
// else{
//     console.log(" incorrect details ");
// }

//  let Age = 11
//   let voterid= true
//   if(Age>=18 && voterid){
//     console.log("Permissable to vote");
//   }
//   else{
//     console.log("not allowed to vote")
//   }


//   let age1 = prompt("enter your age");
//   let boy=true;
//   if(age1>=21 && boy ){
//     console.log("eligible for marriage")
//   }
//   else{
//     console.log("not eligible")
//   }



//   let number=prompt("enter the number ")
//   if( number>=0){
//     console.log("positive number ")
//   }
//   else{
//     console.log(" -ve number")
//   }


// let grade=prompt(" enter your grade");
// if( grade>90 ){
//     console.log(" A")
// }
// else if(grade>80 && grade<=90){
//     console.log("B")
// }
// else{
//     console.log(" improvement needded");
// }

// let age = Number(prompt("Enter your age"));

// if(age >= 18){
//     document.write("Eligible to Vote");
// }
// else{
//     document.write("Not Eligible to Vote");
// }


// for(let i = 1; i <= 10; i++){
//     console.log("Worker " + i);
// }

// function greet(){
//  console.log(" this is the function without argumnet");
// }
//  greet();

//  function addition(a,b){
//     console.log(a+b);
//  }

//  addition(3,5);


//  function sqr(x){
    // return (x*x);
//  }

//  let p=sqr(4);
//  console.log(p);

// const sqre=(x)=>x*x ;
// let  k=sqre(5);
// console.log(k);

// function checker(x){
//     if(x%2===0){
//         console.log("even number");
//     }
//     else{
//         console.log(" odd number ");
//     }
// }

// checker(55);

///ARRAY 
// let tasks = [];
// shift is used to remove the first element from an array and return that removed element. This method changes the length of the array. If the array is empty, it returns undefined. The shift() method is often used when you want to process elements in a queue-like manner, where you remove elements from the front of the array as they are processed.
let arr2=[12,12,34,54,33];
arr2.shift();
console.log(arr2);



// objects are copied by reference and arrays are also copied by reference. so if we change the value of an object or array in one variable, it will also change the value in the other variable that references the same object or array.

// tasks.push("Learn JS");
// tasks.push("Solve Leetcode");

// console.log(tasks);

//  let arr=[12,12,34,54,33];
//  let sum=0;
// for( let i=0;i<arr.length;i++){
// sum+=arr[i];
// }

// console.log(sum);
// arr.sort();
// console.log(arr);

// // for checking if created thing is array or object.
// console.log(Array.isArray(arr))
// console.log(arr instanceof Array);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);



//OBJECTS



let student1 = {
    name: "Priyanshu",
    age: 22,
    cgpa: 8.22,
    isPlaced: false,
    "home adress":"station road , bihariganj" 
};


const user3 = {
    name :"sonu",
    age:23,
    0:100,
    2:"johag"
};
// console.log(user3[0]); // 100
 // console.log(user3["2"]);// johag
// console.log(student1);
// console.log(student1.age);
// console.log(student1.cgpa);   
// console.log(student1["home adress"]); // we can access the property of an object using dot notation or bracket notation. if the property name has space in it then we have to use bracket notation.

 // const s2=student1; // const s2=student1; // this will create a reference to the same object in memory. so if we change the value of s2 then it will also change the value of student1. because both are pointing to the same object in memory.its memory is assignrd in heap .
//console.log(Object.keys(student1)); // Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. In this case, it will return an array of the keys of the student1 object, which are ["name", "age", "cgpa", "isPlaced", "home adress"].
// 
// for(let keys in student1){
//     console.log(keys);
//}// for...in loop is used to iterate over the properties of an object. In this case, it will iterate over the keys of the student1 object and print them one by one. The output will be:

// const{name ,age}=student1;
// console.log(name,age); 

// const{name=username ,age=userage}=student1;
//console.log(username,userage); // if the property name is not present in the object then it will take the default value which we have assigned to it. in this case, username will take the value of "username" and userage will take the value of "userage".


// let worker = {
//     name: "Ramesh",
//     skill: "Plumber",
//     dailyWage: 800,
//     available: true
// };
// console.log(worker.name);
// console.log(worker.skill);
// console.log(worker.dailyWage);

//  let laptop={
//     brand:"Dell",
//     model:"Inspiron 15",
//     price:50000,
//     isGamingLaptop:false
// }
// console.log(laptop["price"]); // used in backend 
// laptop.price=60000;
// laptop.color="Black";
// delete laptop.isGamingLaptop;
// console.log(laptop);

//  let student = {

// name:"monu",
// college:"NIT SILCHAR",
// cgpa:8.22,
// skills : ["HTML","CSS","JavaScript"]
// };
// console.log(student["name"]);
// console.log(student["college"]);
// console.log(student.skills[0]);


// const student2 = {
//     name: "Monu",

//     address: {
//         city: "Silchar",
//         state: "Assam",
//         pincode: 788010
//     }
// }; // nested object

// console.log(student2); 

// console.log(student2["address"]["city"]);
// student2.address.city = "Guwahati"; // updating the nested object
// console.log(student2.address.city);
// student2.address.country = "India"; // adding new property to nested object

// const car = {
//     brand: "Toyota",

//     engine: {
//         type: "Petrol",
//         power: 120
//     }
// };
// console.log(car.engine.type);
// console.log(car.brand);

// const students = [
//     {
//         name: "A",
//         cgpa: 8.5
//     },
//     {
//         name: "B",
//         cgpa: 9.1
//     },
//     {
//         name: "C",
//         cgpa: 7.8
//     }
// ];

// console.log(students[1].name); 
// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);

// }
// const student = {
//     name: "Monu",
//     college: "NIT SILCHAR",
//     cgpa: 8.22
// };

// for( let i in student){
//     console.log(student[i]);

// }
// console.log(Object.keys(student)); // returns an array of keys.
// console.log(Object.values(student)); // returns an array of values.
// console.log(Object.entries(student)); // returns an array of key-value pairs.

// const mobile = {
//     brand: "Samsung",
//     ram: "8GB",
//     storage: "256GB"
// };
// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));
// for(let i in mobile){
//     console.log(i +" :"+ mobile[i]);
// }

const arr4=[1,2,3,4,5];
const arr5=arr4.slice(1,4); // slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.  
//console.log(arr5); // [2,3,4]
const arr6=arr4.splice(1,3); // splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. it returns an array containing the deleted elements. The original array will be modified.

//console.log(arr6); // [2,3,4] splice me original array me change hota hai .

let arr1=["mionu" ,"nilu","subham"]
//console.log(arr1.join("-")); // join method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. The original array will not be modified. In this case, we are using the join method to concatenate the elements of the arr1 array into a single string, with a hyphen ("-") as the separator between the elements. So the output of console.log(arr1.join("-")) will be "mionu -nilu-subham".

const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const pq=fruits.sort();
//console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ] sort method sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points. The original array will be modified. In this case, we are using the sort method to sort the elements of the fruits array in alphabetical order. So the output of console.log(fruits) will be [ 'Apple', 'Banana', 'Mango', 'Orange' ].
 const fr= fruits.toSorted();
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.
//console.log(fr);
//console.log(pq==fr); // false because pq and fr are different arrays. pq is the sorted array returned by the sort() method, while fr is the sorted array returned by the toSorted() method. They are two different arrays with the same elements in the same order, but they are not the same object in memory. Therefore, pq==fr will return false.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.


// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

// Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//console.log(points); // [1, 5, 10, 25, 40, 100] The compare function takes two arguments (a and b) and returns a negative value if a should come before b, a positive value if a should come after b, or zero if they are equal. In this case, we are using the compare function to sort the points array in ascending order. The function subtracts b from a, which will return a negative value if a is less than b, a positive value if a is greater than b, or zero if they are equal. This will sort the array in ascending order. So the output of console.log(points) will be [1, 5, 10, 25, 40, 100].

points.sort(function(a, b){return b-a});// descending order
points.sort((a,b)=>a-b); // ascending order using arrow function

// if a-b>0 to phle b aayega phr a .. anf of a-b negative aaya to phle a and thrn b aayega 

// in js , the sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points. This means that when you call the sort() method on an array of numbers, it will convert the numbers to strings and sort them based on their Unicode values, which can lead to unexpected results. 


// let x8=[12,3,4,[122,34,45],56,67,[78,89,90]];
//x8.name="monu";// arrays are also objects in js so we can add properties to them just like we do with objects. here we are adding a property name to the array x8 and assigning it the value "monu". this does not affect the array elements and we can still access the array elements using their index. but we can also access the name property using x8.name or x8["name"].


//console.log(x8["1"]); // 3 ie" " " ke under v likhke acess kr skte hain 

//x9=x8.flat(); // flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The original array will not be modified. In this case, we are using the flat method to flatten the x8 array by one level. So the output of console.log(x9) will be [ 12, 3, 4, 12, 34, 45, 56, 67, 78, 89, 90 ].


// console.log(x9); // [ 12, 3, 4, 12, 34, 45, 56, 67, 78, 89, 90 ] flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The original array will not be modified. In this case, we are using the flat method to flatten the x8 array by one level. So the output of console.log(x9) will be [ 12, 3, 4, 12, 34, 45, 56, 67, 78, 89, 90 ].



// FUNCTIONS 

// function add(a,b)
// {
//     console.log(a+b);

// }
// add(3,4);//7
// add(1,2,3); // 3 hi answer dega .


// use of rest opertor..
//  function addnumbers(...nums){ // numbers ko array ke under daal deta hai  
// let sum=0;
// for(let n of nums){
//     sum+=n;

// }
// console.log(sum);
//  }
// addnumbers(1,2,3,4,5,6,7,8,9,10);

// const arrx=[4,5,6,7,8,9,10];
// const[first , sec,...num]= arrx;
// console.log(first,sec, num);

// const arry=[7,66,54,78,89,66,43]
// const px=[...arrx,...arry];
// console.log(px);


// fun ko variable ke under store kr skte hain
//  const addnum= function(x,y){
//     return x+y;
//  }
//  console.log(addnum(4,5));


// ARROW FUNCTION
// const jorna=()=>{
//     console.log(" this is arrow function ");
// }
// jorna();


// const add=(x,y)=>{
//     console.log(x+y);

// }
// add(9,2);

// const p=(c,d)=> c+d; // jab 
//  console.log(p(2,3));

// const sq=(x)=>x*x;
// console.log(sq(4,4));

const sq = x=> x*x; // syntax aur short ho gya when there is a single parameter , no need of ()
// console.log(sq(3,3));


const greeting2=()=>{
  let   user={
        name:"monu",
        age:20,
    }
    return user ;
}
 const u = greeting2();
//  console.log(u);
  
 //IIFE

//  (function greeting(){
//     console.log("kumar");
//  })();

        // CALL BACK FUNCTION

// function greet(){
//     console.log(" this is greet function");

// }

// function dance(){
//     console.log(" i am dancing");
// }

// function meet(callback){
//     console.log("this is meet function ");
//     callback();
// }


// function meet(callback){
//     console.log("this is meet function ");
//      dance();
//     // callback();
//     console.log(" i have finished meeting ")
// }
 


// meet(greet());
//  this is greet function
//this is meet function 

// meet(greet);
// meet(dance); 


// real life analogy:-
// function blinkitorderplaced(){
//     console.log(" We have started packing your order");
// }


// function zomatoorderplaced(){
//     console.log(" we have started preparing your food ");
// }

function payment(amount , callback){
//console.log(` Rupees ${amount} payment has intilized`);
//console.log(" payment is received");
// zomatoorderplaced();
callback();

// GST:-
// RIDER
// PROFIT:-
}

// payment(432 ,zomatoorderplaced );
// payment(876,blinkitorderplaced);

//HOISTING

//  execution context
// memory allocation 
// a=undefined 
// b=undefined 
// add number= fn code 
// sumresult1=undefined 




// console.log(a);
// var a=10;
// var b=12;
// function addnumber(num1,num2){
//     var sum=num1+num2;
//     return sum ;
// }

// CLOSURE 

function createcounter(){
    function increament(){
console.log(" ima increament fun");

    }
    return increament;
}

let balance =300;
let user2={
     balance:980,
    deposit:function (amount){
        // console.log(this);
        if(typeof amount=="number" &&  amount>0) { 
        user2.balance+=amount;
    return this.balance;// thia ia very important . because In JavaScript, if a function doesn't explicitly return anything, it automatically returns undefined.
    }
    return "Invalid amount";
}

}
console.log(user2.deposit(900));
console.log(user2.deposit(100));

// higher orer function 
// callback hi hai..

// function double(){
//     function execute(){
//         console.log("execute");
//     }
//     return execute;
// }

// const n=double();
// n();

function double(value){
    function execute(num){
        return num*value;
    }
   return execute;
}

const n2 =double(20);
console.log(n2(5));
console.log(n2(3));

 const nums=[2,4,6,3,12,90];
 const even =nums.filter(nums=>nums%2==0) // nums is an obj and filter is one of thr method.
 console.log(even);

 const ans= nums.reduce((total,nums)=>{return total+nums },0)
console.log(ans);


const students = [
    {name:"A", marks:80},
    {name:"B", marks:90},
    {name:"C", marks:70}
];
const totalsum= students.reduce((sum,x)=>{
    return sum+x.marks;
},0);

console.log(totalsum);


//SET
const arr = [10,20,30,10,25,15,10,20];
// console.log(arr);

const s1 = new Set(arr);

 s1.add(11);


console.log(s1.has(23));
 s1.delete(10);
s1.clear();
console.log(s1);



const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

 const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail);

 const s21 = new Set(email);

for(let num of s21){
    console.log(num);
}


// MAP
// map;
const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);


m1.set({name:"Manish",age:20}, false);

// console.log(m1.size);

for(let [keys,value] of m1){
    console.log(keys, value);

}

const m2=new Map([
    ["monu",32],
    ["sonu",34],
    ["diwa",32]
]);
for( let [key,value] of m2){
    console.log(key ,value);
}
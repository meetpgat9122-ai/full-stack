// console.log("Hello World");
// console.log("Welcome to JavaScript Programming");
// let num=10 ;
// console.log(num);
// let str="Hello JavaScript";
// console.log(str);
// let x='@';
// console.log(x);
// str="mu nmae ";
// console.log(str);

// let balance ="89475";
// console.log( typeof balance);
// console.log(balance);
// balance= Number(balance);
// console.log( typeof balance);

// // undefined type 
// let accout;
// console.log(  typeof accout);
//  let bigint  =98359865658365859356256893450246529562945208456256205620985692065;
// console.log(bigint);

// let n1=10;
// let n2=20;
// let sum = n1+n2;
// console.log("The sum of "+n1+" and "+n2+" is "+sum);

// non primitive data type

// let arr=[10,20,30,40,"monu",true];
// console.log( typeof arr);
// console.log(arr);

// let obj={
//     name:"John",
//     age:30,
//     city:"New York",
//     sex:"male",
//     bank:"SBI",
//     country:" INDIA",
//     balance:50000
// }

// console.log(obj.age);
// console.log(obj["city"]);
// console.log(obj.city);

// function ko variable me stroe kr skte hain . 
//  let fun =function greet(){
//     console.log("Hello ");
//     return 10;
// }
// console.log(fun());
// console.log(typeof fun);

// function add(a,b){
//     console.log( a+b);
// }
// add(2,3);
// add(10,20);

// // type conversion

// let abc="";
// console.log(Boolean(abc));


// console.log(6*3+18/6-9);
// console.log(((6*(3+18))/6)-9);
// console.log(20%6);// remainder 
//  let a=32;
// //  a++;
//     console.log(++a);

    // let a1=3;
    // let a2=4;
    // console.log(a1<a2);

    // let num=12;
    // let str="120"; // string convert hogi number pe 

    // console.log(num==str);

    // let n="10";
    // let n2=102;
    // console.log(n<n2);
     
    // let x1="10";
    // let x2="10373";
    // console.log(x1===x2); // strict equality

    // null == undefined // true

    // null===undefined // false  kuki ye alag alag data type hain.

    // console.log(null==0);
    // console.log(null>0);
    // console.log(null<0);
    // console.log(null>=0); // yha type conversion hoga .


// //null hmesa undefined ke equal ho skta hai  baki kisi v case me equal nhi ho skta.
// console.log(null==undefined);
// console.logl(NaN==NaN); // false aayega hmesa.

// let x = Number("hello");
// console.log(x);

// console.log(undefined!=null);

// let age=343;
// let money=343;
// console.log(age>=money && money>100);

// console.log(4|2);
// console.log(4&&9);
// console.log(5<<3); // 5 multiply by 2 ki power 3
// console.log(5>>3); // 5 divide by 2 ki power 3


// let x = 5;

// console.log(+x);
// console.log(-x);

// console.log(++x);
// console.log(x--);

// console.log(!x);


let a=10;
let b=a;
b=30 ;
//console.log(b);// 30
//console.log(a);// 10

let obj1={
    id:20,
    name:"monu"
}
let obj2=obj1;
obj2.id=30;
//console.log(obj2);
//console.log(obj1); // dono me change hoga kuki dono same reference ko point kr rhe hain.

// Primitive data type me value stored hoti hai aur non primitive data type me reference stored hota hai.
// primitive data type are immutable and non primitive data type are mutable.
// primitive data me new value store krne ke baad wo ek new memory me allocate hoti hai . ie: purani wali memory space ko aap overwrite nhi kr skte. 

let name="Priyanshu kumar";
name[0]="R"; // string immutable hai to aap isme change nhi kr skte.
//console.log(name); // Priyanshu kumar

//console.log(`hello ${name}`); // template lit

let x="      helo world     ";
//console.log(x.trim()); // string ke starting aur ending ke extra space ko remove kr dega.

//console.log("S".charCodeAt(0));

//console.log(' " Hi my name is priyanshu kumar " ');

  let newstring = " hello world";
//console.log(newstring.slice(1,8)); // slice(start,end) end index is exclusive.

let num=232.9323;
//console.log(num.toFixed(5)); // toFixed method se hum decimal ke baad kitne digit rakhna chahte hain wo specify kr skte hain.

//console.log(num.toPrecision(4)); // toPrecision method se hum total kitne digit rakhna chahte hain wo specify kr skte hain.

//console.log(Math.PI); // Math.PI se hum pi ki value ko access kr skte hain.
//console.log(Math.round(4.6)); // Math.round se hum number ko nearest integer me round kr skte hain.
//console.log(Math.floor(4.9)); // Math.floor se hum number ko nearest lower integer me round kr skte hain.
//console.log(Math.random()*10); // Math.random se hum 0 se 1 ke beech me random number generate kr skte hain.
// console.log(Math.floor(Math.random()*10));
 let max=30;
 let min=10;
 //console.log(Math.floor(Math.random()*(max-min+1))+min); // 10 se 30 ke beech me random number generate krne ke liye formula.


 let arr=[10,20,30,40,50];
 //console.log(arr.splice(2,4)); // splice method se hum array me se elements ko remove kr skte hain. splice(startIndex,deleteCount)

//console.log(arr); // splice method se remove hone ke baad array me kya bacha hai wo print hoga.
 let arr1=[1,2,3];
 let arr2=[4,5,6];
 let arr5=[7,8,9];
//console.log(arr1.concat(arr2)); // concat method se hum do array ko merge kr skte hain.
//  let arr3=arr1.concat(arr2);
 let arr4=arr1.concat(arr2,arr5);
 //console.log(arr4);
 arr1.push(arr2); // push method se hum array me new element add kr skte hain. push(element)
 //console.log(arr1); // push method se add hone ke baad array me kya hai wo print hoga. arr1 me arr2 as a single element add hoga.

//let abc=[1,2,3,4,5];
//abc.unshift(0); // unshift method se hum array ke starting me new element add kr skte hain. unshift(element)
//console.log(abc); // unshift method se add hone ke baad array me kya hai wo print hoga. abc ke starting me 0 add hoga.
//console.log(Array.isArray(abc)); // Array.isArray method se hum check kr skte hain ki given variable array hai ya nahi. true aayega kuki abc ek array hai.

let date=new Date(); // Date constructor se hum current date and time ko get kr skte hain.
//console.log(date); // current date and time print hoga.

let date1=new Date("2020-01-01"); // Date constructor me date string pass krne se hum specific date ko get kr skte hain.
console.log(date1); // specific date print hoga.

let date2=new Date(2026,6,1); // Date constructor me year, month, date pass krne se hum specific date ko get kr skte hain. month 0 se start hota hai.
console.log(date2); // specific date print hoga.

let date3=new Date(883459834535)
console.log(date3); // Date constructor me milliseconds pass krne se hum specific date ko get kr skte hain. milliseconds 1 January 1970 se count hote hain.

 console.log(date.getFullYear());
console.log(date.getMonth());
 console.log(date.getDate());
console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(Date.now());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// date.setFullYear(2030);
let d1 = new Date("2026-01-01");
// let d2 = new Date("2026-01-02");

//let diff = d2 - d1;

//console.log(diff); // 1 day in milliseconds ie: output will be in milli seconds 

// console.log(date.getUTCFullYear());
let d3 = new Date("2026-01-01");
let d4 = new Date("2026-01-04");

//console.log(d3.getTime() === d4.getTime()); // getTime method se hum date ko milliseconds me convert kr skte hain. dono date ka time same hai to true aayega otherwise false.
const now =  Date.now(); // Date.now method se hum current date and time ko milliseconds me get kr skte hain. output will be in milliseconds.
console.log(now);

// timer 
const date5 = new Date("2026-01-01T00:00:00");
const date6 = new Date("2026-01-04T12:30:45"); // Olympics 2029 start hone ki date.

const date7 = date6-date5;
const days= Math.floor((date7/(1000*60*60*24))); // milliseconds to days conversion
const hours = Math.floor((date7/(1000*60*60))%24); // milliseconds to hours conversion
const minutes = Math.floor((date7/(1000*60))%60); // milliseconds to minutes conversion
const seconds = Math.floor((date7/(1000))%60); // milliseconds to seconds conversion
console.log(`Olympics will start in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`); // template literal










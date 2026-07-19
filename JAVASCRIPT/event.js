const element= document.getElementById("first"); // getElementById method se hum html element ko get kr skte hain.
// element.addEventListener("click",()=>{
//     element.textContent="i am  the best ";
// })

// element.addEventListener("click",()=>{
//     element.style.backgroundColor="red";
// })

// const child1=document.getElementById("child1"); // getElementById method se hum html element ko get kr skte hain.
// child1.addEventListener("click",()=>{
//     child1.style.backgroundColor="black";
//     child1.textContent="i am  the best child ";
// });

// const parentx=document.getElementById("parent"); // getElementById method se hum html element ko get kr skte hain.
// console.log(parentx.children); // parent ke sare child elements ko get krne ke liye hum parent.children ka use krte hain.html collection return krta hai .

// for( let child of parent.children){
//     child.addEventListener("click",()=>{
//         child.style.backgroundColor="green";
//         child.textContent="i am  the best child ";
//     });
// } // 100 childeren to manually code to nhi na likhte isliye we used loop


// bubbling

const grandparent=document.getElementById("grandparent"); // getElementById method se hum html element ko get kr skte hain.
grandparent.addEventListener("click",(e)=>{
    console.log(e);
    console.log("grandparent clicked");
} ,true); // true means event capturing phase and false means event bubbling phase

const parent =document.getElementById("parent"); // getElementById method se hum html element ko get kr skte hain.
parent.addEventListener("click",()=>{
    console.log("parent clicked");
});

const child=document.getElementById("child"); // getElementById method se hum html element ko get kr skte hain.
grandparent.addEventListener("click",()=>{
    console.log("child clicked");
});



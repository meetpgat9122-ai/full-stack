// const payment = new Promise((resolve, reject) => {

//     let paymentSuccess = true;

//     if (paymentSuccess) {

//         resolve("Payment Successful");

//     } else {

//         reject("Payment Failed");

//     }

// });

// payment
// .then((message) => {

//     console.log(message);

// })
// .catch((error) => {

//     console.log(error);

// });

// const order =new Promise((resolve,reject)=>{
//     console.log("Your food preparation is started");
//     setTimeout(()=>{
//         console.log("Your food is prepared and packed");
//         resolve("Order ready to deliver.");
//     },3000)
// });

// order.then((message)=>{
//     console.log(message);
    
// });

// order.catch((error)=>{
//     console.log(error);
// });



// console.log("hello ");


const p1=fetch("https://api.github.com/users");
// console.log(p1);



// fetch("https://api.github.com/users")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("data is not present in the server");
//     }
// return response.json(); // asynchronous task ....
// }) 
// .then((data)=>{
// console.log(data);
//     const parent = document.getElementById("first");

//     for(let i=0;i<data.length;i++){
//     const image = document.createElement('img');
//     const followers= document.createElement('p');
    
//     image.src = data[i].avatar_url;
//     image.style.height = "40px";
//     image.style.width = "40px";

//     parent.append(image);
//     }
// })    // this is called as promise chaining...
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent=error.message;
// })

const p10=new Promise((resolve,reject)=>{
   resolve("promise is created");

}).then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})



 
// //promise is an object having 3 states pending,fulfilled,rejected

// const j1={
//     name:"sachin",
//     age:24,
//     city:"pune"
// }

// const jsonformat=JSON.stringify(j1); // it will convert the javascript object into json format

const  orderDetail={
    Orderid: 3213,
    
    food:["Cheese Pizza", "Veg Pizza", "Chicken Pizza"],
    cost:989,
    customer_name:"monu",
    customer_location:"Switzerland"
}


function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
     
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
       resolve(orderDetail);
      }
      else{
        reject("Payment is failed");
      }

    },3000)
    })
   
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
  
     setTimeout(()=>{

        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
        
    },3000);
    })
    
}


function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
         if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
    
}


placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ", error);
}).
finally(()=>{
    console.log("I am doing cleanup");
})























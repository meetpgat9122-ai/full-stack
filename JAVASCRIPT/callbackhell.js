// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function bye() {
//     console.log("Goodbye");
// }

// greet("Priyanshu", bye); // bye func in passed as callback  function ..


// zomato application


const  orderdetails={
    Orderid: 3213,
    
    food:["Cheese Pizza", "Veg Pizza", "Chicken Pizza"],
    cost:989,
    customer_name:"monu",
    customer_location:"Switzerland"
}

function placeorder(orderdetails,callback){
    console.log(`${orderdetails.cost}Payment is in progress..`);

     

    setTimeout(()=>{
        console.log('Payment is received and order get placed');
        orderdetails.status=true;
        callback(orderdetails);
},3000)
}

function preparingorder(orderdetails,callback){
    console.log("Your food preparation is started");

     setTimeout(()=>{
        console.log("Your food is prepared and packed");
       callback();
        
    },3000);
}

function pickuporder(callback){
    console.log(" Delivery is on the way to pick up the order ");

     setTimeout(()=>{
        console.log("I have picked up the order ");
        callback();
    },3000);
}


function deliverorder(){
    
        console.log("Your order is on the way to deliver");
        setTimeout(()=>{
            console.log("Your order is delivered");
            

        },3000);
}

    placeorder(orderdetails,()=>{
        preparingorder(orderdetails,()=>{
            pickuporder(()=>{
                deliverorder();
            });
        })
    })



// placeorder(preparingorder(pickuporder)); // here we are passing preparingorder function as callback function to placeorder function/ this will crash the code 
    //  THE OP IS 

// ① Payment is in progress...

// (wait 3 seconds)

// ② Payment is received and order get placed

// ③ Your food preparation is started

// (wait 3 seconds)

// ④ Your food is prepared and packed

// ⑤ Delivery is on the way to pick up the order

// (wait 3 seconds)

// ⑥ I have picked up the order



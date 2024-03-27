// let count = 0;
// const counter = setInterval(function(){
//     count++;
//     console.log(count)
// },1000)
// setTimeout(function(){
//     clearInterval(counter)
// },11*1000)

    // setInterval(function(){
    //     const myDate = new Date();
    //     const hours = myDate.getHours()
    //     const minutes = myDate.getMinutes()
    //     const seconds = myDate.getSeconds()
    //     console.log(`Time=> ${hours}:${minutes}:${seconds} `)

    // },1000)
////how to create custom callback other than setTimeout, setInterval, clearInterval, fs.readfile, fetch, 
// function sayHello(){
//     console.log("SayHello 1")
//     function sayhello2(){
//         console.log("SayHello 2")
//     }
//     sayhello2();

// }
// sayHello()

// const fs = require('fs')
// fs.readFile("jsRevision.js","utf-8", function(err, data){
//     // console.log(data+"Rishabh Mittal 22104089")
//     const newData = "/n Rishabh Mittal 22104089"
//     fs.writeFile("./jsRevision.js", newData, "utf-8", (err)=>{
//         if (err){
//             console.log("Can't overwrite, error:"+ err)
//         }
//     })
//     console.log(data)
    
// } )

// let count = 0;
// function counter (){
//     count++;
//     console.log(count)
// }
// setTimeout(counter,10000)//callback another way to write instead of writing with in the function;

// createOrderApi(cart, function(orderId){
//     proceedPayment();
// })//when createOrderApi is done then proceedPayment will be called. this is callback function approach, Problem here is inversion of control.

// const promise = createOrderApi(cart)//this fucntion is returing promise 
// promise.then(function(orderId){
//     proceedPayment();
// })//this is promise approach, this is better than callback approach.

const userGithub = fetch("https://api.github.com/users/therishabhmittal-05")
userGithub.then(function(data){
    console.log(data)
})//.then function in promise is used to handle the response of promise.
fetch("https://api.github.com/users/therishabhmittal-05").then(function(response){
    console.log(response)
})

// createOrderApi(cart)
// .then(function(orderId){
//     return proceedToPayment();
// }).then(function(paymentInf0){
//    return  balanceAmount(currBalance)
// })

// createorder(cart).then(function(orderId){
//     return proceedToPayment().then(function(paymentInfo){
//          return balanceAmount(currBalance).then(function(balance){
//             console.log("Order is placed")
//         });
//     });
// });
//Now i know one thing if a function is returning promise then using .then() function we handle the respomnse of that promise.
//Syntactically saying .then(function(response){----}) is used to handle the promise returned by the function.(response is the data from the promise)
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

const fs = require('fs')
fs.readFile("jsRevision.js","utf-8", function(err, data){
    // console.log(data+"Rishabh Mittal 22104089")
    const newData = "/n Rishabh Mittal 22104089"
    fs.writeFile("./jsRevision.js", newData, "utf-8", (err)=>{
        if (err){
            console.log("Can't overwrite, error:"+ err)
        }
    })
    console.log(data)
    
} )

// let count = 0;
// function counter (){
//     count++;
//     console.log(count)
// }
// setTimeout(counter,10000)//callback another way to write instead of writing with in the function;
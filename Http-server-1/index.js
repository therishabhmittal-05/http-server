// // //express we have to get from the internet and fs comes with the node itself
// // //fs.readfile("path","encoding",function(error,data){-----})
// // //app.method(get, post, put, delete)("route", function(request,respond){---------})
// // //app.get is sending the data and app.listen is listenning it at port specified

// // const express = require("express")
// // const bodyParser = require("body-parser")
// // const app = express();
// // const port = process.env.PORT;
// // const http = require('http')
// // app.use(bodyParser.json())
// // app.get("/rishabh/convo",function(request, respond){
// //   respond.json({
// //     "name":"Rishabh",
// //     "Class": "BTech",
// //     "Roll No.": "22104089"
// //   })
// // })
// // app.get("/youtube",(request,respond)=>{
// //   console.log(req.headers)
// //   respond.send("<h1>Rishabh Mittal</h1>")
// // })
// // app.get("/twitter",(req,res)=>{
// //     console.log(req.headers)
// //     res.send("Ha bhai aa gya twitter pr")
// // })
// // app.listen(port, ()=>{
// //   console.log(`Rishabh Mittal and port is ${port}`)
// // })
// const express = require('express')
// const app = express();
// const port = 3000;
// function calc(n){
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans = ans +i;  
//   }
//   return ans;
// }
// app.get("/r", (req,res)=>{
//   const n = req.query.n;
//   const ans = calc(n);
//   res.send(ans.toString());
// })
// app.listen(port, ()=>{
//   console.log(`port: ${port}`)
// })

// // function promise(){
// //   const p = new Promise((resolve)=>{
// //     resolve(
// //        3 + 4
// //     )
// //   })
// //   return p;
// // }

// // async function Main(){
// //     const value = await promise();
// //     // console.log(value)
// // }
// // Main();
const express = require('express');
const app = express();
const port = 4000;
function calc(n){
  return n*n;
}
app.get('/', (req, res)=>{
    const n = req.query.n;
    let ans =   calc(n);
    res.send(ans.toString());
})
app.listen(port, ()=>{
  console.log(`${port}`)
})
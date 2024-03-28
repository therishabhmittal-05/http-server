const express = require('express');
const app = express()
function add(a,b){
    // console.log(a+b)

    return Number(a)+ Number(b);
}
app.get('/rishabh',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    // add(a, b)
    res.send("Hello Rishabh "+ add(a,b) )
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
// console.log("Server is running on port 3000")

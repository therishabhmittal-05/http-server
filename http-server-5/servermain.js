const express =require('express');
const app = express();
function isEnoughAge(age){
    if (age>14){
        return true
    }
    else {
        return false
    }
}
let reqCount = 0;
function reqCounter(req, res, next){
    reqCount++;
    console.log(reqCount)
    next()

}

// const ride1 = require("./routes/ride1")
// app.use('/ride1', ride1)


app.get("/ride1", reqCounter, (req, res)=>{
    if(isEnoughAge(req.query.age)){
        res.json({
            message: "You are eligible for ride 1"
        })
    }
    res.json({
        message: "Sorry you are not eligible for ride 1"
    })
})
// console.log(reqCount)

app.listen(3000)
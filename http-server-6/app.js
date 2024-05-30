const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const globalCatch = (err, req, res, next)=>{
    console.log(err);
    res.json({
        message: err.message
    })
}
const middleWare = (req, res, next)=>{
    console.log("Middleware")
    next()
}
app.use(middleWare)
app.use (globalCatch)
app.get('/greet/:name',  (req, res)=>{
    const {name} = req.params;
    res.json({
        greet: `Hello ${name}!`
    });
})
app.get('/hello', (req,res)=>{
    const name = req.query.name;
    const id = req.query.id;
    res.json({
        name, id
    })
})
app.post('greet',(req, res)=>{
    const {name} = req.body;
    res.status(201).json({
        greet: `Hello ${name}!!`
    })
    if(!name){
        res.status(400).json({
            message: "Name is required"
        })
    }
})

app.listen(3000)
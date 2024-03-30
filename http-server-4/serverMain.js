const express = require('express');
const app = express()
app.set('view engine', 'ejs')
app.use(express.json());
// function serverCall(req, res, next){
//     res.send("Rishabh ==="+ req.originalUrl)
//     next()
// }
const webHTML = app.use(express.static('public'))

app.get('/',webHTML, (req,res)=>{
    // res.json({"greetings":"Hello, Rishabh"})
    res.render('index.ejs')
})


const userRouter = require('./routes/users')
app.use('/users', userRouter)

const postRouter = require('./routes/posts')    
app.use('/posts', postRouter)

const orderList = require('./routes/orderList')
app.use('/orderList', orderList)

const authRouter  = require('./routes/auth')
app.use('/auth', authRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

//app.use() has various use cases like: linking a router, middleware etc.
// put static routes above dynamic routes.
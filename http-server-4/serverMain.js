const express = require('express');
const app = express()
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.json({"greetings":"Hello, Rishabh"})
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)


const postRouter = require('./routes/posts')    
app.use('/posts', postRouter)

const orderList = require('./routes/orderList')
app.use('/orderList', orderList)


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
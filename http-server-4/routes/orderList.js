const express = require('express')
const router = express.Router()
const cart = [{'category':"Grocery", "orderId":1, 'items':["wine", "eggs", "milk"]}]

router.get("/",(req,res)=>{
    res.json(cart)
})



module.exports = router;
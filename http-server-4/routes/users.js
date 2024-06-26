const express = require('express');
const router = express.Router();
const users = [{"name": "Rishabh","id":"1","age": "21", "city": "Delhi" }]
router.get('/', (req, res) => {
    res.json(users)
})
router.get('/:id', (req, res) => {
    if (!users.find(users => users.id === req.params.id)) {
        res.status(403).json({
            error: "No user found"
        })
    }
   else  res.json(users.find(users => users.id === req.params.id))
})

module.exports = router


// Array method .find()  takes callback as an argument and returns the first element in the array that satisfies the condition in the callback. If no element satisfies the condition, it returns undefined.
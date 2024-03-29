const express = require('express');
const router = express.Router();
const posts = [{"title": "Post 1","id":"1","content": "This is the first post" },
{"title": "Post 2","id":"2","content": "This is the second post" },
{"title": "Post 3","id":"3","content": "This is the third post" }
]
router.get('/', (req, res) => {
    res.json(posts)
})
router.get('/:id', (req, res)=>{
    res.json(posts.find(posts => posts.id === req.params.id)) 
})

module.exports = router

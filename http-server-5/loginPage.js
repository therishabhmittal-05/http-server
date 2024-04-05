const express = require('express');
const app = express();  
const jwt = require('jsonwebtoken')
const jwtPassword = 'secret'
app.use(express.json())

const allUsers = [{username: 'Rishabh', password: 'admin', name:"Rishabh Mittal"}, {username: 'Sushant', password: 'user', name:"Sushant Mittal"}]

function isUser(username, password){
    return allUsers.find(function(user){
        return user.username === username && user.password === password;
    })
}


app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!isUser(username, password)){
        res.status(401).send('Invalid username or password')
        return;
    }
    const token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    })
})

app.get('/users', (req, res)=>{
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token, jwtPassword)
        console.log(decoded)
        const username = decoded.username


        return res.json({
            Users: allUsers.filter((value)=>{
                if(value.username != username){
                    return value
                }
            })
        })
    }
    catch(err){
        return res.json({error: 'Invalid'})
    }
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})
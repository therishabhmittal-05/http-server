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

const ride1 = require("./routes/ride1")
app.use('/ride1', ride1)


app.listen(3000)
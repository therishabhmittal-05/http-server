const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

mongoose.connect(
  "mongodb+srv://<username>:<password>@mongodb-2.77kjivx.mongodb.net/"
);// connect me to database 
// mongoose.model--> to create a model, ask for table name and schema
const userSchema = mongoose.model("userStatus", {
  name: String,
  username: String,
  password: String
});
const userToken = mongoose.model("userToken", {
  username: String,
  token: String,
});
app.use(express.json());
app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  // we will take form data from user and store it in database for now postman is used 
  const token = jwt.sign({ username: username }, jwtPassword); // token is generated for username
  const user = new userSchema({
    name: name,
    username: username,
    password: password,
  });
  const tokenGenerated = new userToken({
    username: username,
    token: token,//token is saved here in database
  });
  const existingUser = await userSchema.findOne({ username: username });// checking if user exists findone is used its a database call so it is async
//   consolg.log(existingUser)
  if (existingUser) {
    res.json({
      message: "User already exists",
      token: tokenGenerated.token,
    });
    return;
  }
  tokenGenerated.save();// saving token in database
  user.save().then(() => {// saving user in database
    res.json({
      userToken: tokenGenerated.token,
    });
  });
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    // console.log(decoded);
    if(decoded){
        const user = userSchema.findOne({username: decoded.username})
        console.log(user)   
        res.json({
            message: "User Found"
    })
    }} catch (err) {
    return res.json({ error: "Invalid" });
  }
});

app.listen(3000);

const express = require("express");
const app = express();
const idAuth = (req, res, next) => {
  const id = req.query.id;

  if (id != 1 && id != 2) {
    res.status(411).json({
      error: "Invalid ID",
    });
  } else {
    next();
  }
};
const userAndPasswdAuth = (req, res, next) => {
    const user = req.get("user");
    const passwd = req.get("passwd");
  if (!(user === "Rishabh" && passwd === "pass")) {
    res.status(403).json({
      error: "invalid inputs",
    });
  } else {
    next();
  }
};
//request counter on the server middleware
let request = 0;
const reqCounter = (req, res, next)=>{
  request++;
  console.log(request)
  next();
}


app.get("/info", idAuth, userAndPasswdAuth, reqCounter, (req, res) => {  
  res.status(200).json({
    msg: "Welcome Aboard",
  });
});

let error = 0;
app.use((err, req, res, next)=>{
  error++;
  res.status(501).json({
    error: "Hey You got it wrong"
  })
  console.log("error:",error)

})

app.listen(3000, function () {
  console.log(3000);
});

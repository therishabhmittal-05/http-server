const express = require("express");
const app = express();

app.get("/info", (req, res) => {
  const id = req.query.id;
  const user = req.get('user');
  const passwd = req.get('passwd');

  if (id != 1 && id != 2) {
    res.status(411).json({
      error: "Invalid ID",
    });
    return;
  }
  if (!(user === "Rishabh" && passwd === "pass")) {
    res.status(403).json({
      "error": "invalid inputs",
    });
    return;
  } 
 
  res.status(200).json({
    msg: "Welcome Aboard",
  });
});

app.listen(3000, function(){
    console.log(3000)
});

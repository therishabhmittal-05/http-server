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

app.get("/info", idAuth, userAndPasswdAuth, (req, res) => {  
  res.status(200).json({
    msg: "Welcome Aboard",
  });
});

app.listen(3000, function () {
  console.log(3000);
});

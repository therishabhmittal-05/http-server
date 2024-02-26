const express = require('express');
const app =express();
let toDo = [];
app.use(express.json())

const userAuth = (req, res, next) => {
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
 app.get("/toDo", userAuth, (req, res)=>{
    res.status(200).send(toDo)
 })
 app.get("/toDo/:id", userAuth, (req, res)=>{
    const id = req.params.id;
    if(!(toDo[id-1])){
        res.status(403).json({
            errror: "No ToDO"
        })
    }
    res.status(200).send(toDo[id-1])
 })
 app.post("/toDo", userAuth, (req,res)=>{
    const TODO = req.body.TODO;

    if(TODO){
      toDo.push({"TODO": TODO})
    res.json({
        "msg": "Done"
    })}
 })
 app.delete("/toDo/:id", userAuth, (req,res)=>{
   
    let toDoId =  parseInt(req.params.id);
    console.log(typeof toDoId)
    toDo.splice(toDoId,1)
    res.send(toDo)
 })
 app.use((err, req, res, next)=>{
  res.json("Sorry Server Down")
 })
app.listen(3000)
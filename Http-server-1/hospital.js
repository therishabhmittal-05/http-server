const express = require("express");
const app = express();
const zod = require('zod')
const schema = zod.array(zod.number())
const schema2 = zod.object({
  email: zod.string(),
  password: zod.string().min(8),
  country: zod.literal("IN").or(zod.literal("US"))
})
var users = [
  {
    name: "Rishabh",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];
app.get("/", (req, res) => {
  const noOfKidneys = users[0].kidneys.length;
  let noOfhealthyKidneys = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      noOfhealthyKidneys++;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfhealthyKidneys;
  res.json({
    noOfKidneys,
    noOfhealthyKidneys,
    noOfUnhealthyKidneys,
  });
});
app.use(express.json());
app.post("/", (req, res) => {
  // const isHealthy = req.body.isHealthy;
  // users[0].kidneys.push({
  //   healthy: isHealthy,
  // });
  // res.json({
  //   msg: "done",
  // });

  // const kidneys = req.body.kidneys;
  const user = req.body.user;
  // const response = schema2.safeParse(user)
  // res.send({response})
  throw new Error()  
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});
app.delete("/", (req, res) => {
  if(unhealthyCheck()){
  const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy)
        newKidneys.push({
          healthy: true
        });
    }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "done",
  });
}
else {
  res.status(411).json({
    error: "411"
  })
}

 
});
function unhealthyCheck(){
  let unhealthy = false;
  for(let i = 0; i< users[0].kidneys.length; i++){
    if(!(users[0].kidneys[i].healthy)){
      unhealthy = true;
    }
  }
  return unhealthy;
}
app.use((err, req, res, next)=>{
  res.send("Hi There aa gye ithe")
})
app.listen(4000);

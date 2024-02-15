const express = require('express');
const app = express();
var users = [
  {
    name: "Rishabh",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
app.get("/",(req,res)=>{
    const noOfKidneys = users[0].kidneys.length;
    let noOfhealthyKidneys = 0;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            noOfhealthyKidneys++;
        }        
    }
    const noOfUnhealthyKidneys = noOfKidneys - noOfhealthyKidneys;
    res.json({
        noOfKidneys,
        noOfhealthyKidneys,
        noOfUnhealthyKidneys
    })
    
})
app.post("/",(req,res)=>{

})
app.put("/",(req,res)=>{

})
app.delete("/",(req,res)=>{

})
app.listen(3000)

const { dir } = require('console');
const express = require('express');
const zod = require('zod')
const app = express();
const fs = require('fs');
const dirPath = './testFolder'
 app.get("/files", (req,res)=>{
    fs.readdir(dirPath, (err, files)=>{
         if(err){
            return res.status(500).json({error : "failed to retrieve files"})
        }
        res.json(files);
    })
 })
 app.get("/files/:fileName", (req, res)=>{
    const filePath = './testFolder/'+ req.params.fileName;
    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            return res.status(400).json({error: "file not found"})
        }
        res.json(data)
    })
 })


app.listen(3000)

fs.readdir(dirPath, "utf-8", (err, files)=>{
    console.log(files)
})
fs.readFile("./testFolder/a.txt", "utf-8", (err, data)=>{
    console.log(data)
})
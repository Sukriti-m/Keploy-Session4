const express=require("express");
const app=express();
const fs=require("fs");
const path = require('path');

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));

});
app.get("/capitals",(req,res)=>{
fs.readFile(__dirname+'/capital.json',(err,data)=>{console.log(err);
    res.end(data);});
});
app.listen(3000,(err)=>{if(!err)
    console.log("Server started");
    });
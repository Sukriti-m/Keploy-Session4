const express=require("express");
const app=express();
const fs=require("fs");
app.get("/", (req,res)=>{
    res.send("Hi, the API is working");

});
app.get("/capitals",(req,res)=>{
fs.readFile(__dirname+'/capital.json',(err,data)=>{console.log(err);
    res.end(data);});
});

app.listen(3000,(err)=>{if(!err)
    console.log("Server started");
    });
const express=require("express");
const app=express();
const fs=require("fs");
const path = require('path');
const data=require('./capital.json');
app.set('view engine', 'ejs')
app.get("/", (req,res)=>{
    res.render("index", {
        data: data
    })

});
app.get("/capitals",(req,res)=>{
fs.readFile(__dirname+'/capital.json',(err,data)=>{console.log(err);
    res.end(data);});
});
app.listen(3000,(err)=>{if(!err)
    console.log("Server started");
    });
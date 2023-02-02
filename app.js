require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const fs=require("fs");
const path = require('path');
const data=require('./capital.json');
const Route=require("./routers/capital");
mongoose.connect(process.env.DB)
.then(()=> console.log("DB connection successfull"))
.catch((err)=>{console.log(err)});

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



app.use(express.json());
app.use("/api",Route);
app.listen(3000,(err)=>{if(!err)
    console.log("Server started");
    });
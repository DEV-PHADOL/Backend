const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("middleware");
    next();
});

app.get("/",function (req,res) {
    res.send("HELLO WORLD");
});

app.get("/about",function (req,res,next) {
    return next(new Error("SOMTHING WENT WRONG"));
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('SOMTHING BROKE!');
});

app.listen(3000);
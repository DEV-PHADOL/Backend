const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("HEY");
});

app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({
        name:"DEV",
        email:"danny@gmail.com",
        username:"danny"
    });
    res.send(createduser);
});

app.get('/update',async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({name:"DEV"},{username:"DANNY"},{new:true});
    res.send(updateduser);
})

app.get('/read',async (req,res)=>{
    let users = await userModel.find();
    res.send(users);
});

app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete();
    res.send(users);
})

app.listen(3000,()=>{
    console.log("It's Working");
})
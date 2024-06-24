const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/posts');

app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/create',async (req,res)=>{
    let user = await userModel.create({
        username: "danny",
        age: 20,
        email: "danny@gmail.com" 
    });
    res.send(user);
});

app.listen(3000,()=>{
    console.log("It's Working");
});
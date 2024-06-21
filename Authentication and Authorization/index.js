// const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// SET-COOKIE

// app.use(cookieParser())

// app.get('/',(req,res)=>{
//     res.cookie("name","danny");   
//     res.send("DONE");
// });

// app.get("/read",(req,res)=>{
//     console.log(req.cookies);
//     res.send("Read Page");
// })

// ENCRYPTION of PASSWORD

// app.get('/',(req,res)=>{   
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash("qwertyuiop", salt, (err,hash)=>{
//                 console.log(hash);
//         });
//     });
// });
// $2b$10$mK38FW9/E3FdgAt7/HuEyut5SEXhuYM0s/lszdebQQPxVv.LvnjnS

// DECRYPTION of PASSWORD

// app.get('/',(req,res)=>{
//     bcrypt.compare("qwertyuiop","$2b$10$mK38FW9/E3FdgAt7/HuEyut5SEXhuYM0s/lszdebQQPxVv.LvnjnS",(err,result)=>{
//         console.log(result);
//     });
// });


// JWT
app.use(cookieParser());
app.get('/',(req,res)=>{
    let token = jwt.sign({email: "danny@example.com"},"secret");
    res.cookie("token",token);
    res.send("done");
});

app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
});

app.listen(3000,()=>{
    console.log("It's Working");
});
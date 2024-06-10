const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const log = `${Date.toString()} : ${req.url} New Req Received \n`;
    fs.appendFile("log.txt",log, (err,data)=>{
        switch(req.url){
            case "/":
                res.end("Home Page");
                break
            case "/about":
                res.end("This is About Page");
                break
            default : res.end("404 ERR This is DEFAULT");
        }
    });
});

myServer.listen(3000,()=>{
    console.log("SERVER START");
});
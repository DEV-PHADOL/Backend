const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    const log = `${Date.toString()} : ${req.url} New Req Received \n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log, (err,data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break
            case "/about":
                const userName = myUrl.query.myname;
                res.end(`Hey,${userName}`);
                break
            default : res.end("404 ERR This is DEFAULT");
        }
    });
});

myServer.listen(3000,()=>{
    console.log("SERVER START");
});


// we used to write url 
// https(PROTOCOL): //www.google.com(DOMAIN)/about(PATH)?myname=dev&roll_no=19
// NOTE : we use '?' symbol to seprate out the path and query 
// NOTE : we use '&' symbol to seprate out the queries 
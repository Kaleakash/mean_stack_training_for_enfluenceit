let http = require("http");
let url = require("url");

let server = http.createServer((req,res)=>{
    
    //console.log(req.url);
    let urlDetails = url.parse(req.url,true);
    //console.log(urlDetails);
    if(urlDetails.pathname != "/favicon.ico"){
        console.log("Client send request");
    }
    res.end("Client send the request");
})

server.listen(9999);
console.log("Server running on port number 9999");
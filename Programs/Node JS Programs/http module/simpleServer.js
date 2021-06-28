let http = require("http");
let count =0;
let server = http.createServer((req,res)=>{
        count++;
        console.log("Client send the request")
        res.write("HI")
        res.write("Hello")
        res.write("How r you")
        res.write("Count value is "+count);

        res.end();
        //res.end("<h1>Welcome simple http module example</h1>");
})

server.listen(9999);
console.log("Server is running on port number 9999")
let http = require("http");
let url = require("url");
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="checkUser">
        <label>UserName</label>
        <input type="text" name="uname"/><br/>
        <label>Password</label>
        <input type="password" name="pname"/><br/>
        <input type="submit"/>
    </form>
</body>
</html>
`
let server = http.createServer((req,res)=>{
    let urlDetails = url.parse(req.url,true);
    console.log(urlDetails)
    if(urlDetails.pathname != "/favicon.ico"){
        if(urlDetails.pathname=="/aboutUs"){
            res.write("About Us Page ")
        }else if(urlDetails.pathname=="/contactUs"){
            res.write("Contact Us Page")
        }else if(urlDetails.pathname=="/loginPage"){
               res.write(htmlContent) 
        }else if(urlDetails.pathname=="/checkUser"){
                //res.write("YOU click on submit");
                let login = urlDetails.query;
                let user = login.uname;
                let pass = login.pname;
                if(user=="Ravi" && pass=="123"){
                    res.write("Successfully LOgin")
                }else {
                    res.write("Failure try once again")
                }
        }else {
            res.write("Not found")
        }
    }
    res.end();
})

server.listen(9999);
console.log("Server running on port number 9999");
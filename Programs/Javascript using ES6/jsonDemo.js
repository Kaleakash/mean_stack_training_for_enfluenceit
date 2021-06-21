let jsonString = ' {"id":100,"name":"Ramesh"} '
document.write("Data in string format <br/>")
document.write(jsonString)
document.write("<br/>Id is "+jsonString.id)
document.write("<br/>Name is "+jsonString.name)
//converting string to json 
let jsonData = JSON.parse(jsonString);
document.write("<br/>Data in json format<br>")
document.write(jsonData)
document.write("<br> Id is "+jsonData.id)
document.write("<br> Name is "+jsonData.name)
let emp = {id:100,name:"Ramesh"}      // object literal object style 
document.write("<br/>JavaScript object <br/>")
document.write(emp)
document.write("<br/>")
document.write("<br/>Id is "+emp.id)
document.write("<br/>Name is "+emp.name)
//JavaScript object convert to string   or  json to string  
    let empInfo = JSON.stringify(emp);
// string to json 
    let jsonData1 = JSON.parse(empInfo);
document.write("<br/>Data in json format<br>")
document.write(jsonData1)
document.write("<br> Id is "+jsonData1.id)
document.write("<br> Name is "+jsonData1.name)
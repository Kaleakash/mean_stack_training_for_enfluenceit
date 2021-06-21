let jsonString = '{"id":100,"name":"Ajay Kumar","age":21,"result":true,"skillSet":["HTML","JavaScript","Angular"],"address":{"city":"Bangalore","state":"Kar"},"projects":[{"pid":11,"projectname":"Angular"},{"pid":22,"projectname":"React JS"}]}';
let jsonData = JSON.parse(jsonString);
// promise object ES5 style 
var obj1 = new Promise(function(resolve,reject){
    //reject("Error Generated"),
    resolve(jsonData)
    
})
obj1.then(function(data){
    document.write("<br/>Then called.."+data.id)
}).catch(function(error){
    document.write("<br/>Catch called.."+error)
});

//promise object ES6 style 
var obj2 = new Promise((resolve,reject)=> {
    reject("Error Generated...")
})
obj2.then(data=>document.write("<br/>Then called"+data)).catch(error=>document.write("<br/>catch called "+error))

document.write("<br> Normal Statement 1")
document.write("<br> Normal Statement 2")
document.write("<br> Normal Statement 3")


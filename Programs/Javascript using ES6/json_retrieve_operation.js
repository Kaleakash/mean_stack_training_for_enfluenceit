let jsonString = '{"id":100,"name":"Ajay Kumar","age":21,"result":true,"skillSet":["HTML","JavaScript","Angular"],"address":{"city":"Bangalore","state":"Kar"},"projects":[{"pid":11,"projectname":"Angular"},{"pid":22,"projectname":"React JS"}]}';
let jsonData = JSON.parse(jsonString);
document.write("<br> id is "+jsonData.id);
document.write("<br> Name is "+jsonData.name)
document.write("<br/> Age is "+jsonData.age)
document.write("<br/>Result is "+jsonData.result)
document.write("<br> Number of skillSet is "+jsonData.skillSet.length)
jsonData.skillSet.forEach(skill=>document.write("<br/> "+skill))
document.write("<br>")
document.write(jsonData.skillSet)
document.write("<br>")
document.write("<br> city "+jsonData.address.city)
document.write("<br> state "+jsonData.address.state)
document.write("<br/> Project Name "+jsonData.projects[0].projectname)
document.write("<br/> Project Name "+jsonData.projects[1].projectname)
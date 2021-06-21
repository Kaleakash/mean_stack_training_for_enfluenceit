let num = [3,1,6,2,5,9,8];
let num1 = [12,20,6,87,45,150,32,65,5,2,100];
document.write("<br/>")
document.write(num);
num.sort();
document.write("<br/> After sort by default asc <br/>")
document.write(num);
num.reverse();
document.write("<br/> After sort by  desc <br/>")
document.write(num);
document.write("<br/>Sorting for 2 digit numbers<br/>")
document.write(num1)
document.write("<br/> After sorting Asc order<br/>")
//num1.sort((n1,n2)=>n1-n2);
num1.sort(function(n1,n2){
    return n1-n2;
})
document.write(num1)
document.write("<br/> After sorting Desc order<br/>")
num1.sort((n1,n2)=>n2-n1);
document.write(num1)

// object creation in literal style 
let emp1 = {id:100,name:"Ramesh",age:21};
document.write("<br/><br/>object creation in literal style<br/>")
document.write("<br/>Id is "+emp1.id)
document.write("<br/>Name is "+emp1.name)
document.write("<br/>age is "+emp1.age)

let emp2 = {id:101,name:"Lokesh",age:18};
let emp3 = {id:102,name:"Mahesh",age:15};
let emp4 = {id:103,name:"Raju",age:16};
let emp5 = {id:104,name:"Ajay",age:24};

//Array objects. 
let emps = [emp1,emp2,emp3,emp4,emp5];
let emps1 = [{id:101,name:"Lokesh",age:18},{id:102,name:"Mahesh",age:15}]
let employees = new Array();
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);
employees.push(emp5);
document.write("<br/>display employee details<br/>");
employees.forEach(emp=>document.write("<br/>id is "+emp.id+" Name is "+emp.name+" Age "+emp.age))

//employees.sort((e1,e2)=>e2.age-e1.age);
employees.sort((e1,e2)=> {
    if(e1.name>e2.name){
        return -1;
    }else if(e2.name>e1.name){
        return 1;
    }else {
        return 0;
    }
})
document.write("<br/><br/>After sort<br/><br/>")
employees.forEach(emp=>document.write("<br/>id is "+emp.id+" Name is "+emp.name+" Age "+emp.age))






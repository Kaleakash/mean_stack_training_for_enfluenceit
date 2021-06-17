function info() {
    alert("welcome to user-define function")
}
//info.prototype.id=100;
//info();
/*
function Person(){
        this.pid =100;
        this.pname ="Ravi"
        this.disPersonDetails = function() {
                    document.write("<br/>id is "+this.pid)
                    document.write("<br/>pname is "+this.pname)
        }
}

var p1 = new Person();      // person object created...
//alert("id is "+p1.pid)
//alert("name is "+p1.pname);
p1.disPersonDetails();


var p2 = new Person();         // person object created...
p2.disPersonDetails();
*/

// parameter with user-defined objects 

// function Person(pid,pname,age){
//             this.pid = pid;
//             this.pname = pname;
//             this.age = age;
//             this.disInfo = function() {
//             document.write("<Br/>Id is "+this.pid+" Name is "+this.pname+" Age is "+this.age);
//             }
// }
// var p1 = new Person(100,"Ajay",21);
// var p2 = new Person(101,"Mahesh",24);
// var p3 = new Person(102,"Lokesh",26);
// p1.disInfo();
// p2.disInfo();
// p3.disInfo();

//Employee object 

// function Employee(id,name,salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary;
//     this.disInfo = function(){
//         document.write("<br/>Employee Details are ")
//         document.write("<br/> Id is "+this.id)
//         document.write("<br/> Name is "+this.name)
//         document.write("<br/> Salary is "+this.salary)
//     }
// }
// var emp1 = new Employee(100,"Ravi",14000);
// var emp2 = new Employee(101,"Ramesh",16000);
// emp1.disInfo()
// //Add dynamic property for employee 
// alert(emp1.id)
// alert(emp1.desg);
// Employee.prototype.desg="Programmer";       // adding property 
// alert("After added")
// alert("First employee"+emp1.desg);
// alert("Second employee "+emp2.desg);
// emp1.desg="Tester";
// alert("First employee"+emp1.desg);
// alert("Second employee "+emp2.desg);
// Employee.prototype.empInfo = function(){        // adding funtionality 
//                 alert("Your id is "+this.id);
// }
// emp1.empInfo();
// emp2.empInfo();

// function Employee(id,fname){
//     var id = id;                   // it is local variable, it is like a private  
//     this.fname = fname;
    
//     this.dis1= function(){          // this function is a behaviour of employee object 
//         alert("This is dis1 function")
//         alert("id is "+id)
//         alert("name is "+this.fname)
//         dis2();
//     }

//     function dis2() {                   // this is normal function this is like a private function 
//         alert("This is dis2 function")
//     }
// }

// var emp1 = new Employee(100,"Ramesh");
// alert(emp1.id);
// alert(emp1.fname);
// emp1.dis1();
// //emp1.dis2();


// Inheritance using ES5 style : it is use to do re-usability 

function Employee(id,name) {
    this.id = id;
    this.name = name;
    this.disEmpInfo= function() {
        document.write("<br/> This is Employee class function ")
        document.write("<br/> id is "+this.id)
        document.write("<br/> Name is "+this.name);
    }
}
function Manager(id,name,numberOfEmp) {
    Employee.call(this,id,name);            // passing id,name to employee and making inheritance. 
    this.numberOfEmp= numberOfEmp;          // its own property 
    this.disManagerInfo= function(){
        document.write("<br/> This is Manager class function")
        document.write("<br> Number of Employee "+this.numberOfEmp);
    }
}
//var emp1 = new Employee();
//emp1.disEmpInfo();
//Manager.prototype = Object.create(emp1);            // achieve inheritance using prototype 
//Manager.prototype= Object.create(new Employee(100,"Ravi"));
var mgr1 = new Manager(101,"Ravi",10);
mgr1.disEmpInfo();
mgr1.disManagerInfo();
var mgr2 = new Manager(102,"Ram",12);
mgr2.disEmpInfo();
mgr2.disManagerInfo();

//









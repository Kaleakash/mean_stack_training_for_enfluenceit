// //ES5 function style 
// function Employee() {
//     this.id = 100;
//     this.name = "Ravi";
//     this.dis = function() {
//         document.write("<br/>Employee function style object ")
//         document.write("<br> Id is "+this.id)
//         document.write("<br> Name is "+this.name);
//     }
// }
// var emp1 = new Employee();
// emp1.dis();
// //ES6 class style 
// class Customer {
//     id=100;
//     cname="Raju"
//     dis(){
//         document.write("<br/>Customer class style object")
//         document.write("<br/> Customer Id is "+this.id);
//         document.write("<br> Customer Name is "+this.cname)
//     }
// }
// let cust1 = new Customer();
// cust1.dis();





//ES5 function style with constructor  
// function Employee(id,name) {
//     this.id = id;
//     this.name = name;
//     this.dis = function() {
//         document.write("<br/>Employee function style object ")
//         document.write("<br> Id is "+this.id)
//         document.write("<br> Name is "+this.name);
//     }
// }
// var emp1 = new Employee(100,"Ajay");
// emp1.dis();
// //ES6 class style 

// class Customer {
//     //constructor(){}
//     constructor(id=0,cname="Unknown") {
//             document.write("<br/>object created..")
//             this.id = id;
//             this.cname = cname;
//     }
//     dis(){
//         document.write("<br/>Customer class style object")
//         document.write("<br/> Customer Id is "+this.id);
//         document.write("<br> Customer Name is "+this.cname)
//     }
// }
// let cust1 = new Customer(101,"Mahesh");
// cust1.dis();
// let cust2 = new Customer(102);
// cust2.dis();
// let cust3 = new Customer();
// cust3.dis();

//Inheritance 
// class Employee {
//     constructor() {

//     }
//     disEmp() {
//         document.write("<br/>Employee class functions")
//     }   
// }
// class Manager extends Employee{
//     constructor() {
//         super();            //mandatory super() in sub class construtor. 
//     }
//     disMgr() {
//         document.write("<br> Manager class function")
//     }
// }
// let emp1  = new Employee();
// emp1.disEmp();

// let mgr1 = new Manager();
// mgr1.disMgr();
// mgr1.disEmp();


class Employee {
    constructor(id,name,salary) {
            this.id = id;
            this.name = name;
            this.salary = salary;
    }
    disEmp() {
        document.write("<br/>Employee class functions")
    document.write("<br/>id is "+this.id+" Name is "+this.name+"Salary is "+this.salary)
    }   
}
class Manager extends Employee{
    constructor(id,name,salary,numberOfEmp) {
        super(id,name,salary);      // using super passing value to employee class 
        this.numberOfEmp = numberOfEmp;             
    }
    disMgr() {
        document.write("<br> Manager class function")
        document.write("<br/> Number of employee working under him "+this.numberOfEmp)
    }
}
let mgr1 = new Manager(100,"Raju",45000,12);
mgr1.disEmp();
mgr1.disMgr();
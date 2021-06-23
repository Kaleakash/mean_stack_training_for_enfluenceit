//Employee object with two instance property
// class Employee {
//        id:number=100;
//        name:string="Ravi"; 
//        dis(): void {
//             console.log("Employee class function")
//             console.log("id is "+this.id)
//             console.log("name is "+this.name)
//        } 
// }
// let emp1 = new Employee();
// emp1.dis();

//constructor with parameter 
// class Employee {
//     id:number;
//     name:string;
//     age:number;
//     constructor(id:number,name:string,age:number=24){
//             this.id = id;
//             this.name = name;
//             this.age = age;
//     } 
//     dis(): void {
//          console.log("Employee class function")
//          console.log("id is "+this.id)
//          console.log("name is "+this.name)
//          console.log("age is "+this.age)
//     } 
// }
// let emp1 = new Employee(101,"Mahesh",21);
// emp1.dis();
// let emp2 = new Employee(102,"Raju",25)
// emp2.dis();
// let emp3 = new Employee(103,"Rajesh");
// emp3.dis();

// with access specifiers 
// class Employee {
//         private id:number=100;
//         private name:string = "Ravi";
//         public set _id(id:number){       //set id with condition  
//             if(id<0){
//                  console.log("Id must be +ve")   
//             }else {
//                 this.id = 200;
//             }
//         }
//         public get _id():number{     // get the id 
//             return this.id; 
//         }
// }

// let emp1 = new Employee();
// console.log(emp1._id)
// emp1._id=-200;
// console.log(emp1._id)

//constructor short cut initialization 
// class Employee {
//     private id:number;
//     constructor(id:number,public name:string,private age:number=20){
//         if(id<0){
//             this.id = 123;
//         }else {
//             this.id =id;
//         }
//     }

//     disEmpInfo(): void {
//         console.log("id is "+this.id)
//         console.log("name is "+this.name)
//         console.log("age is "+this.age)
//     }
// }
// let emp1 =new Employee(-100,"Rajesh",23);
// emp1.disEmpInfo();
// let emp2 = new Employee(101,"Raju")
// emp2.disEmpInfo();

//static variable and function 
// class Employee {
//     a:number=10;        // number of copy of object created.
//     static b:number = 20; 
//     dis1(): void {
//         console.log("non static function")
//         console.log("a "+this.a)
//         console.log("b "+Employee.b);
//     }
//     static dis2(): void {
//         console.log("static function")
//     }
// }
// //dis1();
// //dis2();       we can't access both static and non static function directly 
// console.log(Employee.b);        // static variable we can access through class name.
// let emp1 = new Employee();
// console.log(emp1.a);
// let emp2 = new Employee();
// console.log(emp2.a)
// emp2.a=100;
// //console.log(emp1.b)
// emp1.dis1();
// Employee.dis2();            // static function we can call through class name

//Inheritance 
//
// class Employee {                    // super class, base class or parent class 
//         constructor(private id:number,public name:string,protected age:number){}
//         disEmp()    :   void {
//                 console.log("Employee function")
//                 console.log("id is "+this.id)
//                 console.log("name is "+this.name);
//                 console.log("age "+this.age)
//         }
// }
// class Manager extends Employee {    // sub class, derieved class or child class.
//         constructor(id:number,name:string,age:number,public numberOfEmp:number){
//             super(id,name,age);
//         } 
//         disMgr() : void {
//                 console.log("Manager function");
//                 console.log("Number of emp "+this.numberOfEmp)
//                 console.log(" "+this.age)      
//                  //protected is like a public for sub class inside a sub class function.  
//                 console.log(" "+this.name);
//             }
// }
// let emp1 = new Employee(100,"Ramesh",21);
//     //console.log(emp1.id)      private 
// console.log(emp1.name)
//     //console.log(emp1.age)     protected 
// let mgr1 = new Manager(101,"Ravi",21,150);
// mgr1.disEmp();
// mgr1.disMgr();
// console.log(mgr1.name)
// console.log(mgr1.numberOfEmp)

//interface with variable and functions. 
// interface Abc {
//     a:number;
//     dis1():void;
// }
// interface Mno {
//     b:number;
//     dis2():void;
// }
// class Demo implements Abc,Mno {
//     a:number;
//     b:number;
//     dis1():void {
//         console.log("Abc interface function")
//     }
//     dis2():void {
//         console.log("Mno interface function")
//     }
// }
// let obj = new Demo();
// obj.dis1();
// obj.dis2();

// interface only function 
// interface Bank {
//         withdraw():void;
//         deposit():void;
// }

// class Hdfc implements Bank {
//     withdraw(): void {}
//     deposit():void{}
// }
// class Hsbc implements Bank {
//     withdraw():void{}
//     deposit():void{}
// }


//object creation in literal style 
interface Employee {
    id:number;
    name:string;
    age?:number;
}

let num:number=100;

let emp1:Employee = {id:100,name:"Ravi",age:35};
let emp2:Employee = {id:101,name:"Ramesh",age:34}
let emp3:Employee = {id:102,name:"Raju"};


















// /*
// ES5 as well as ES6: not mandatory number of parameter as well as type of parameter must be match
// function add(a,b){

// }
// add(10,20)
// add(10)
// add()
// add("Ravi","Kumar")
// */
// // number of parameter must be match with any data types 
// function add(a,b){      
//     var sum = a+b;
//     console.log(sum);
// }
// add(10,20)
// add("Ravi","Kumar");
// add(1,true)        

// // number of parameter and type of parameter must be match 
// function empInfo(id:number,name:string,salary:number){  
//     console.log("id is "+id)
//     console.log("name is "+name)
//     console.log("salary is "+salary)
// }
// empInfo(1,"Ravi",15000);
// empInfo(2,"Mahesh",18000);

// // function with no return type
// function info():void {
//     console.log("info function with void no return type")
// }
// info();

// // function with specific return type 
// function sayHello(name:string):string {
//     return "Welcome to TypesCript"+name;    
// }
// console.log(sayHello("Ravi"));

// // function with return number type 
// function addNumber(a:number,b:number):number{
//     return a+b;
// }
// console.log("Sum of two number is "+addNumber(1,2));
// // function may return any type or not.     by default in typescript any type consider; 
// function display():any{
//     console.log("Hell")
//     //return 10;
//     return "Welcome User"
// }

// // function with optional parameter 
// function stdInfo(sid?:number,sname?:string,age?:number):void{
//     console.log("Sid id "+sid);
//     console.log("SName is "+sname)
//     console.log("Age is "+age)
// }
// stdInfo(100,"Raj",21);
// stdInfo(101,"Ram");
// stdInfo(102)
// stdInfo();

// function with default initialization 
// function stdInfo(sid:number=0,sname:string="Unknown",age:number=18):void {
//     console.log("Sid id "+sid);
//     console.log("SName is "+sname)
//     console.log("Age is "+age)
// }
// stdInfo(100,"Raj",21);
// stdInfo(101,"Ram");
// stdInfo(102)
// stdInfo();

// variable or parameter must receive zero (optional), 1 or many 
function empInfo(id:number,name:string,salary:number,...skillSet:string[]):void {// rest operator 
        console.log("Emp Id  "+id);
        console.log("Emp Name "+name)
        console.log("Emp Salary "+salary)
        console.log("Number of skillSet "+skillSet.length)
        console.log("all skillSet are "+skillSet)
}
let skillInfo:string[]=["HTML","CSS","JavaScript","Angular","Node"];

empInfo(100,"Raju",16000);
empInfo(101,"Ram",19000,"C")
empInfo(102,"Rajesh",25000,"C","C++","Java","Python");
empInfo(103,"RajDeep",34000,skillInfo[0],skillInfo[1],skillInfo[2]);
empInfo(103,"RajDeep",34000,...skillInfo);      // spread operator 


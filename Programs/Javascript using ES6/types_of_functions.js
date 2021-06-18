//Normal function 
// function display() {
//     document.write("<br/> Normal function")
// }
// display();
// //function with parameter 
// function add() {
//         alert("function called...")
//         let leng = add.arguments.length;
//         alert("Number of arguments are "+leng);
//         for(let i=0;i<leng;i++){
//             let obj  = add.arguments[i];
//             alert(obj);
//         }
// }
// add(10,20);
// add(10)
// add()
// add("Ravi","Ramesh")

//Expression style function with function name 
// let sayHi = function sayHello() {
//                 alert("Say Hello function ")
//             }

// sayHi();

// //Expression style function with anonymous name
// let hello = function() {
//     alert("hello function")
// }
// hello();
// dis1();

// function dis1() {
//     document.write("<br/> Normal style function")
// }

// dis1();

// dis2();
// let dis2 = function() {
//     document.write("<br/> Expression style function")
// }
// dis2();

// arrow function 
// function dis1() {
//     document.write("<br/> Normal style function")
// }
// dis1();

// let dis2 = function() {
//     document.write("<br/>Expression style function")
// }
// dis2();

// let dis3 = () => document.write("<br/> Arrow function")
// dis3();


// // addition of two number using expression style 
// let addNumber1 = function(a,b){
//     var sum = a+b;
//     return sum;
// }
// document.write("<br> Addition of two number is in expression style "+addNumber1(10,20));

// // Addition of two number using arrow function style 
// let addNumber2 = (a,b)=>a+b;
// document.write("<br> Addition of two number is in arrow style "+addNumber2(10,20))

// // largest of two number using arrow function style 

// let findLargest = (a,b)=> {
//             if(a>b){
//                  return a;   
//             }else {
//                 return b;
//             }
// }
// document.write("<br/> Larget of two number is in arrow style "+findLargest(10,20));


// function sayHello(fname,callback){
//             return "Welcome "+callback(fname);
// }
// let maleInfo = function(fname){
//             return "Mr "+fname;
// }
// let femaleInfo = (fname)=>"Miss "+fname;

// document.write(sayHello("Raj",maleInfo))
// document.write("<br/>")
// document.write(sayHello("Reeta",femaleInfo));
// document.write("<br/>")
// document.write(sayHello("Ram",function(fname){
//     return "Mr "+fname;
// }));
// document.write("<br/>")
// document.write(sayHello("Seeta",(fname)=>"Miss "+fname))







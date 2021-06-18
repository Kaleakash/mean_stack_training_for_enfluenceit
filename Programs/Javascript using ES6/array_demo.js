// let num1 = [];
// let num2 = [10,20,30,40,50]
// let num3 = new Array();
// let num4 = new Array(10)
// let num5 = new Array(1,2,3,4,5);
// document.write("<br/> Size of array "+num1.length)
// document.write("<br/> Size of array "+num2.length)
// document.write("<br/> Size of array "+num3.length)
// document.write("<br/> Size of array "+num4.length)
// document.write("<br/> Size of array "+num5.length)
/*
let num = [100,200,300,400];
let empInfo = [100,"Ramesh",12000,true];
document.write("<br/>Retrieve value using index position "+num[0])
document.write("<br/>Retrieve value using index position "+empInfo[1])*/

//Retrieve array value different ways. 
// let num = [100,200,300,400,500];
// document.write("<br/> Using index position "+num[0]);

// document.write("<br/> Normal for loop")
// for(let i=4;i<num.length;i++){
//     document.write("<br> Value is "+num[i])
// }

// document.write("<br> Using for in loop")
// for(let i in num){
//     document.write("<br> Index position is "+i+" Value is "+num[i]);    
// }

// document.write("<br/> Using for of loop")
// for(let n of num){
//     document.write("<br> Value is "+n);
// }

// //1st way 
// document.write("<br/> Using foreach normal function style")
// num.forEach(display1);
// function display1(n){
//         document.write("<br/> VAlue is "+n);
// }
// //2nd way 
// document.write("<br/> Using foreach express function style")
// let display2 = function(n){
//     document.write("<br/> Value is "+n);
// }
// num.forEach(display2);
// //3rd way 
// document.write("<br/> Using anonymous function style")
// num.forEach(function(n){
//     document.write("<br> Value is "+n);
// })
// //4th way 
// document.write("<br/> Using arrow function style")
// num.forEach(n=>document.write("<br/>Value is "+n))

// array methods 

let num = [10,20,30,40,50];
document.write("Display all array element in string format<br/>")
document.write(num);        
document.write("<br/>using index position "+num[0])
document.write("<br/> Size of array "+num.length);
num.push(100);          // this method is use to add the element at last 
num.push(200);
num.unshift(300)        // This method is use to add the element at begining 
num.unshift(400)
document.write("<br/>")
document.write(num)
num.pop();          // this method remove the elements from last 
num.shift();        // This method remove the elements from begining 
document.write("<br/>")
document.write(num)
//num.splice(2,1)     // index position and number of elements. 
//num.splice(2,3);      // from 2 index position remove 3 elements.   
//num.splice(2,0,1111);   // added 1111 number in 2nd position 
//num.splice(2,0,1111,2222,3333,4444);  
//num.splice(2);      // from 2 position remove all elements. 
num.splice(2,2,200,300); // from 2 position old value replace by 200 and 300 values.        
document.write("<br/>")
document.write(num)






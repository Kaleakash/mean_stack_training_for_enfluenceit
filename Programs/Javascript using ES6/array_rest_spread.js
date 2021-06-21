//array with different values.
// structure the elements or values.  
// let empInfo = [100,"Ravi",12000,true,"C","C++","Java"];
// let id = empInfo[0];
// let name = empInfo[1]
// let salary = empInfo[2]
// let result = empInfo[3];

// document.write("<br/>Name is "+name)
// // array de structure using ES6 features 
// let [empId,empName,empSalary,empResult,...info]=empInfo;     Rest Operator 
// document.write("<br> Id using array de structure "+empId)
// document.write("<br> name using array de structure "+empName)
// document.write("<br> Salary using array de structure "+empSalary)
// document.write("<br> Result using array de structure "+empResult)
// document.write("<br> Result using array de structure "+info)
// document.write("<br> length of array is "+info.length)

// let num1 = [10,20,30,40,50];
// let num2 = num1;            // num1 and num2 refer to same memory 
// document.write("<br>")
// document.write(num1)        //10,20,30,40,50
// document.write("<br>")
// document.write(num2)        //
// num1.push(60);
// document.write("<br>")
// document.write(num1)        //10,20,30,40,50,60
// document.write("<br>")
// document.write(num2)        //
// let num3 = [...num1];                   // spread operator only copy  
// document.write("<br>")
// document.write("After spread operator<Br/>")
// document.write(num1)
// document.write("<br>")
// document.write(num3)
// num1.push(70);
// document.write("<br>")
// document.write(num1)
// document.write("<br>")
// document.write(num3)



//let a=10;
//let b =a;

let num4 = [100,200,300,400,500];
let num5 = [600,700,800,900,1000]
//let mergeArray = [num4,num5];
//let mergeArray = [num4[0],num4[1],num4[2],num4[3],num5[0],num5[1],num5[2]]
let mergeArray = [...num4,...num5]
num4.push(111);
//let mergeArray = [];
//mergeArray.push(num4)
//mergeArray.push(num5);
document.write("Merge array using spread operator<br/>")
document.write(num4.length+"<br>")
document.write(num5.length+"<br>")
document.write(mergeArray.length+"<br>")
document.write(mergeArray+"<br>")
document.write(mergeArray[0])

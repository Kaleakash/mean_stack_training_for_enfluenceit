let obj = require("readline-sync");
let con =0;
let ch;
// read data from file and convert to array. []
do{
console.log("1:Add 2 : Update Salary 3 : Delete emplyee using id 4:display salary 5: Display All");
    ch = obj.questionInt("Enter your chioce")
    switch(ch){
        case 1:console.log("Add")           // id must be unique and salary > 25000
                
                break;
        case 2:console.log("Update")        // +ve > than previous salary 
                break;
        case 3:console.log("Delete")        // by id 
                break;
        case 4:console.log("Display Salary")    // by id 
                break;
        case 5:console.log("Display All")    // Display all  
                break;

    }

con = obj.question("Do you want to continue y/n")
}while(con=='y')
console.log("Thank You!")

// array convet into string and store in file. 
let obj = require("../src/asyncFuntion");
let chai = require("chai").expect;

describe("asynchronous operation testing",()=> {
    
    it("update Salary testing ES5 style",()=> {
        obj.updateSalary(1,"Raj",45000,"Manager").then(updatedSalary=> {
            chai(updatedSalary).to.be.equal(50000);
        }).catch(error=>console.log(error));
        
    })
    it("update Salary testing ES7 style",async()=> {
        let updatedSalary = await obj.updateSalary(1,"Raj",45000,"Manager");
        chai(updatedSalary).to.be.equal(50000);
    })
})
let obj = require("../src/operation");
let chai = require("chai").expect;

describe("Math Operation",()=> {
    it("Addition Testing",()=> {
        let result1 = obj.add(10,20);
        chai(result1).to.be.equal(30);
    })
    it("Sub Testing",()=> {
        let result1 = obj.sub(100,50);
        chai(result1).to.be.equal(50);
    })
    it("Mul Testing",()=> {
        let result1 = obj.mul(5,2);
        chai(result1).to.be.equal(10);
    })
    it("Div Testing",()=> {
        let result1 = obj.div(20,10);
        chai(result1).to.be.equal(2);
    })
})
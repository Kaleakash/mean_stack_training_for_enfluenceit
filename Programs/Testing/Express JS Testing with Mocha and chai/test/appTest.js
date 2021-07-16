let obj = require("../src/app");
let chaiHttp = require("chai-http");
let chai = require("chai");
chai.use(chaiHttp);     //in chai library we enable chai-http assertion methods 
let expect =chai.expect;

describe("Express Testing",()=> {
    xit("Get() simple Text Message testing ",async ()=> {
        let result = await  chai.request(obj).get("/simpleMessage");
        //console.log(result);
        expect(result.status).to.be.equal(200);
        expect(result.text).to.be.equal("Welcome to REST API");  
    })

    xit("Get() JSON Messge testing ",async ()=> {
        let result = await  chai.request(obj).get("/emp");
       // console.log(result);
        let emp = result.body;
        expect(emp).to.be.have.property("id").to.be.equal(100);
        expect(emp).to.be.have.property("name").to.be.equal("Ravi");
        expect(emp).to.be.have.property("age").to.be.greaterThan(20); 
    })

    it("Post Method ",async ()=> {
        let emp ={id:100,name:"Raju",salary:34000};
        let result = await  chai.request(obj).post("/storeEmp").send(emp);
        expect(result.text).to.be.equal("Id must be unique");
    })
})

let chai = require("chai").expect;
let name="Ajay";
let num=100;
let emp  = {id:100,name:"Ramesh",age:21};

chai(name).to.be.a("string");
chai(num).to.be.a("number");
chai(name).to.be.equal("Ajay");
chai(name).to.be.have.length("4");
chai(emp).to.be.have.property("id");
chai(emp).to.be.have.property("age").to.be.equal(21);


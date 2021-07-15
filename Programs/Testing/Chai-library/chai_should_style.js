var chai = require("chai").should();
var name = "Ramesh";
var age =21;

name.should.be.a("string");
age.should.be.a("number");
name.should.be.equal("Ramesh");
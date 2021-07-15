let chai = require("chai").assert;

let name ="Raj";
let num = 100;
let result = true;
let array_num = [10,20,30,40,50,60]
function fun() {

}
chai.isTrue(result);
chai.isArray(array_num);
chai.typeOf(name,"string");
chai.typeOf(num,"number");
chai.isFunction(fun);
chai.equal(name,"Raj");
chai.lengthOf(name,"3");
chai.include(array_num,10)

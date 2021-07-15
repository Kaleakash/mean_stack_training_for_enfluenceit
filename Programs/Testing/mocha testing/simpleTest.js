var assert = require("assert");
let obj = require("./info");

describe("Simple Testing",()=> {
    
    it("Simple Message Testing",()=> {
        assert.equal(100==100,true);
    })

    it("sayHello function testing",()=> {
        let result = obj.sayHello("Raj");
        assert.equal("Welcome Raj",result);
    })
})
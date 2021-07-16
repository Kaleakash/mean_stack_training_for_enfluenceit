
describe('Simple Testing', () => {
   var a,b;
 beforeAll(()=> {
	console.log("Before all it function")
}) 
    beforeEach(()=> {
	a=10;
	b=20;
	console.log("before each it function")
})	
    it("SayHello function testing",()=> {
        let result = sayHello("Raju");
	console.log("while testing");
        expect("Welcome Raju").toEqual(result);
    })

    it("simple message",()=> {
	console.log("Another spec testing function");
    })
afterEach(()=> {
	console.log("after each it function")
	})
 afterAll(()=> {
	console.log("After all it function")
}) 
})

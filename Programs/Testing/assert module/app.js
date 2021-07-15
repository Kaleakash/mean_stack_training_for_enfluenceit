let assert = require("assert");
function add(a,b){
    var sum = a-b;
    return sum;
}

var result = add(10,20);
assert(result==30,"Sum be must be 30");



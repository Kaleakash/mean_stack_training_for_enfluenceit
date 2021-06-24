import {display} from './abc';
import {add,sayHello} from './xyz';
display();
document.write(add(10,20));

export function dis() {
    let name = document.getElementById("user").value;
    sayHello(name);
}
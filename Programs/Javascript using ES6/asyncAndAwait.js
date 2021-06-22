// Normal function 
// function fun1() {
//     // coding....
//     return 100;
// }
// console.log(fun1())
// console.log("Normal Statement1")
// console.log("Normal Statement2")

// async keyword with function 
// async function fun2() {
//     // coding 
//     return new Error("Error Generated...")
//     //return 100;
// }
// //console.log(fun2())
// fun2().then(data=>console.log("Then executetd "+data)).catch(error=>console.log("Error "+error));
// console.log("Normal Statement1")
// console.log("Normal Statement2")

async function loadData() {
    try{
    let res = await fetch("https://jsonplaclder.typicode.com/todos");
    let result = await res.json();
    console.log(result);
    }catch(e){
        console.log(e)
    }    
    console.log("Normal Statement1")
    console.log("Normal Statement2")
}

loadData();






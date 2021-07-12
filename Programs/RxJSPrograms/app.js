import { Observable } from "rxjs";

let obj = Observable.create(obj=> {
    
    obj.next("1st statement")
    obj.next("2nd Statement")
    obj.error("Error Generated")
    obj.next("3rd Statement");
    obj.complete();
    
})

obj.subscribe(data=>console.log(data),
error=>console.log(error),
()=>console.log("Completed"));

// obj.subscribe(data=>console.log(data),
// error=>console.log(error),
// ()=>console.log("Completed"));

// obj.subscribe(data=>console.log(data),
// error=>console.log(error),
// ()=>console.log("Completed"));
/*
let pr = new Promise((resolve,reject)=> {
    resolve("done")
})

pr.then(data=>console.log(data)).catch(e=>console.log(e))

*/
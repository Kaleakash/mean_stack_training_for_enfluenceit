import { Observable} from "rxjs";
//import range from 'rxjs/operators'
import {filter, map} from 'rxjs/operators'
let obj = Observable.create(obj=> {
    obj.next(1)
    obj.next(2)
    obj.next(3)
    obj.next(4)
    obj.next(5)
    obj.next(6)
});

obj.pipe(map(v=>v+100),filter(v=>v%2==0)).subscribe(data=>console.log(data),
error=>console.log(error),
()=>console.log("Completed"));
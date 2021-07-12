import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()                       
export class MyFakeService {

    constructor(public http:HttpClient){}           //DI for HttpClient Pre-defined API

    display() : string {
        return "Welcome to Fake Service using DI";
    }

    loadFakeService() {
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        subscribe(data=>console.log(data),
        error=>console.log(error),
        ()=>console.log("completed"))
    }
}
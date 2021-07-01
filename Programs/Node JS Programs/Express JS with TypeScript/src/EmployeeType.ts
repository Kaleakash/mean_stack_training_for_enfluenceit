/*export interface Employee {
    id:number,
    name:string,
    salary:number
}*/
//model class. this class or interface is use to map the json data. 
export class Employee {
    constructor(public id:number,public name:string,public salary:number){}
}
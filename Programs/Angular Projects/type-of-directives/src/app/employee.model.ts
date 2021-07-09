/*
    This model class is use to map the json data which receive from backend technologies. 
*/
/*
export class Employee {
    constructor(public id:number,
        public name:string,
        public age:number){}
}*/

export interface Employee {
        id:number;
        name:string;
        age:number;
}
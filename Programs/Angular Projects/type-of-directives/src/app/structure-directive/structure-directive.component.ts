import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  f1:boolean = false;
  flag:boolean = false;
  b1:string ="Show";
  stdNames:Array<string>=["Raj","Ravi","Ramesh","Raju","Ram"];
  employees:Array<Employee>=new Array();
  constructor() { 
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
    let emp1 :Employee={id:100,name:"Rajesh",age:21};
    //let emp1 = new Employee(100,"Ravi",24);
    let emp2:Employee = {id:101,name:"Ajay",age:25}
    let emp3:Employee = {id:102,name:"Dinesh",age:26};
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  changeValue() {
    if(this.b1=="Show"){
      this.b1 = "Hide";
      this.flag=true;
    }else {
      this.b1 = "Show";
      this.flag=false;
    }
    
  }
}

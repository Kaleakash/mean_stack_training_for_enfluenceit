import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  name:string ="Ravi";
  salary:number=15000;
  dob:Date = new Date();
  
  emp:Employee=new Employee(100,"Ravi","Male",21,"Bangalore");
  employees:Array<Employee>=[];
  constructor() { }

  ngOnInit(): void {
    let emp1 = new Employee(100,"Ravi","Male",21,"Bangalore");
    let emp2 = new Employee(101,"Reeta","FeMale",23,"Pune");
    let emp3 = new Employee(102,"Raju","Male",24,"Delhi");
    let emp4 = new Employee(103,"Meeta","FeMale",22,"Koltaka");
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
    this.employees.push(emp4);

  }

}

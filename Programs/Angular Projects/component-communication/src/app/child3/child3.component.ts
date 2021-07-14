import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor(public ser:SharedService) { }   //DI for Service

  ngOnInit(): void {
    let sNames:Array<string>=["Ravi","Rajesh","Lokesh","Mahesh"];
    this.ser.setStudentNames(sNames);
    console.log("In Child3 component set the value to service function");
  }

}

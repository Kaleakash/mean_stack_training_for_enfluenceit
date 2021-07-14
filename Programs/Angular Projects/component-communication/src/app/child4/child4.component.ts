import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  sNames?:Array<String>;
  constructor(public ser:SharedService) { }   //DI for Service

  ngOnInit(): void {
    this.sNames=this.ser.getStudentNames();
  }

}

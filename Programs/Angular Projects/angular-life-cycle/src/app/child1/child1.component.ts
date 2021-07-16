import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnChanges ,DoCheck,OnDestroy{
 @Input()
  parentName?:string;
  constructor() {
    console.log("child1 component created...")
   }

  ngOnInit(): void {
    console.log("child1 ngOn Init method called...")
  }
  ngOnChanges(simple:SimpleChanges) { 
    console.log(simple);
    console.log("Child component ngOnChange")
  }
  ngDoCheck() {
    console.log("child ngDoCheck function")
  }
  ngOnDestroy() {
    console.log("child component destroy")
  }
}

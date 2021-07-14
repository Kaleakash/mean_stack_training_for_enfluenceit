import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input()              // this varaible ready to receive the value from parent component variable. 
  pName:string="";

  age:number=0;

  @Output()
  em = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  passAge(ageRef:any) {
    this.age = ageRef.value;
    this.em.emit(this.age);   // pass the value to parent component
  }
}

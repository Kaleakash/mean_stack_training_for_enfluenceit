import { Component, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentName:string="";
  cAge?:number;
  childDesignation?:string;
  
  @ViewChild(Child2Component)         //type of DI
  child2Ref?:Child2Component;

  passValue(nameRef:any){
    this.parentName=nameRef.value;
  }

  callChildComponentFunction() {
    this.child2Ref?.dis();      // calling child2 function from parent component
    this.childDesignation=this.child2Ref?.desg;
  }

}

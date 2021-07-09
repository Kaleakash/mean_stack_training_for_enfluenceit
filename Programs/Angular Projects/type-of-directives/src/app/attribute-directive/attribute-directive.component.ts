import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  styleRules = {'color':'red'};
  f1:boolean = true;
  f2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  changeEffect() {
    if(this.f1){
      this.f1=false;
      this.f2 = true;
    }else {
      this.f1 = true;
      this.f2=false;
    }
  }
}

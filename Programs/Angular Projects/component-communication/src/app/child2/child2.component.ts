import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  desg:string="Tester";
  constructor() { }

  ngOnInit(): void {
  }

  dis(): void {
    console.log("This is child2 function");
  }
}

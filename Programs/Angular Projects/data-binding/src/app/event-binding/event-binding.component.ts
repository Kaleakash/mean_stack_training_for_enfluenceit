import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  info:string="";
  constructor() { }

  ngOnInit(): void {
  }
  fun() {
    console.log("Event fired....");
    this.info="Welcome to Angular Training";
  }

}

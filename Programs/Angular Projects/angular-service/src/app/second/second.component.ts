import { Component, OnInit } from '@angular/core';
import { MyService } from '../custom.service';
import { MyFakeService } from '../fake.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  msg:string="";
  msg1:string="";
  constructor(public fSer:MyFakeService) { }

  ngOnInit(): void {
  }

  fun() {
    let ss = new MyService();
    this.msg = ss.display();
  }

  fun1() {
    this.msg1 = this.fSer.display();
  }
}

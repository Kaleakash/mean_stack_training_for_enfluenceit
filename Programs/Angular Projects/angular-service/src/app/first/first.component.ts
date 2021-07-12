import { Component, OnInit } from '@angular/core';
import { MyService } from '../custom.service';
import { MyFakeService } from '../fake.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg:string="";
  msg1:string="";
  constructor(public fSer:MyFakeService) { }    //DI pull the object from a container

  ngOnInit(): void {
  }

  fun() {
    let ss = new MyService();
    this.msg = ss.display();    
  }

  fun1(){
    this.msg1 = this.fSer.display();
  }
}


import { Component } from '@angular/core';
import { CustomService } from './custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  name:string="Ravi Kumar";
  stdNames:Array<string>=["Ravi","Raju","Lokesh","Mahesh"];
  age:number=21;
  
  constructor(public ss:CustomService){

  }
  
  sayHello(){
    // coding...
    return "welcome";
  }

  changeAge(): void {
    // coding.....
    //let age = 56;
    this.age = 34;
    console.log(this.age);
  }

  async dis() : Promise<string> {
    return "Welcome";
  }

  callServiceMethod():string {
    return this.ss.displayServiceMsg();
  }
  
}

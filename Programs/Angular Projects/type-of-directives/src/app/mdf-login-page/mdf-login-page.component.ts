import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {

loginRef = new FormGroup({
  user:new FormControl(),
  pass:new FormControl()
});

msg:string="";
  constructor() { }

  ngOnInit(): void {
  }


  checkUser() {
    let login = this.loginRef.value;
    //console.log(login);
    let user = login.user;
    let pass = login.pass;
    if(user=="Raj" && pass=="123"){
      this.msg = "Successfully Login"
    }else {
      this.msg = "Failure try once again"
    }
    this.loginRef.reset();
  }
}

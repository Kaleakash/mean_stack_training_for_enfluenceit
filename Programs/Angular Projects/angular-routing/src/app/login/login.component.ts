import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string=""
  constructor(public router:Router) { } // DI for Router

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    if(login.user =="Raj" && login.pass=="123"){
        this.router.navigate(["home"]);
    }else {
        this.msg = "Invalid username or password"
    }
    loginRef.reset();
  }
}

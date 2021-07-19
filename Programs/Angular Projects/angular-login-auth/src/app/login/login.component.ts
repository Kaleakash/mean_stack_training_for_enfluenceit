import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
    let login = this.loginRef.value;
    this.ls.checkUser(login).subscribe((result:any)=>
    {
      let token = result.token;
      let userEmail = result.userCredentials.email; 
      console.log(token);
      
      sessionStorage.setItem("secret",token);

      this.router.navigate(["home",userEmail])
    },
    (error:any)=>console.log(error));
  }

}

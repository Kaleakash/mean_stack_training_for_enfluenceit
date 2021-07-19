import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  loginRef=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }

  createLoginDetails() {
    let login = this.loginRef.value;
    this.ls.storeLoginDetails(login).
    subscribe((result:any)=>console.log(result),
    (error:any)=>console.log(error));
  }
}

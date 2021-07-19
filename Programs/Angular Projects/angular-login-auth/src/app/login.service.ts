import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string="http://localhost:4000/user"
  constructor(public http:HttpClient) { }

  checkUser(login:Login):Observable<any>{
    return this.http.post(this.url+"/login",login);
  }

  storeLoginDetails(login:Login):Observable<any>{
    return this.http.post(this.url+"/register",login);
  }
}

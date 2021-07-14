import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class LoginAuthGuard implements CanActivate{
    constructor(public router:Router){//DI for Router 

    }
    canActivate() {
        console.log("I came here")
        if(sessionStorage.getItem("key")){
            return true;
        }else {
            this.router.navigate(["login"]);
            return false;
        }
        
    }
}
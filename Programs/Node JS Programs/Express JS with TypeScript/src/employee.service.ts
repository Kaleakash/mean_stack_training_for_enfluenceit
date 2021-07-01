import { Login } from "./Login.model";

export function checkDetails(login:Login){
    if(login.userName=="Raj" && login.password=="123"){
        return  "Success";
    }else {
        return "Failure";
    }
}


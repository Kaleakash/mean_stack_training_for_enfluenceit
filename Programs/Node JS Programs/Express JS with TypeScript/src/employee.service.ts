import { Login } from "./Login.model";

export function checkDetails(login:Login){
    if(login.userName=="Raj" && login.password=="123"){
        return  "Success";
    }else {
        return "Failure";
    }
}

/*

insert into login values(login.userName,login.password);


select * from login;


query we have to convert sql query format to json format. 

*/
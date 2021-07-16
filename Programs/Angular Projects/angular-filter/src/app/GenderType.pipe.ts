import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"GenderPipe"
})
export class GenderType implements PipeTransform{
        transform(value:any,genderType?:any){
            console.log("Name is "+value);
            if(genderType=="Male"){
                return "Mr "+value;
            }else {
                return "Miss "+value;
            }
            //return "Hello "+value.toString().toUpperCase();
        }    
}
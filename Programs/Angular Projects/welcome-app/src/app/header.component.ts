import { Component } from "@angular/core";

@Component({
    selector:"app-header",
    template:`<div>
            
                    {{msg}}
            
            </div>`,
    styles:["div{color:blue}"]
})
export class HeaderComponent {
    msg:string="Header component information";
}
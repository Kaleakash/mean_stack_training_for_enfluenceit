import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id?:number;
  constructor(public activeRouter:ActivatedRoute) { } //DI


  ngOnInit(): void {
    //this.activeRouter.params.subscribe(data=>console.log(data));
    this.activeRouter.params.subscribe(data=>this.id = data.pid);
  }

}

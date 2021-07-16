import { AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterViewChecked,AfterViewInit,AfterViewChecked {
  title = 'angular-life-cycle';
  name:string="Ramesh";
  f1:boolean = true;
  change() {
    this.f1 = false;  
  }
  constructor(){
    console.log("parent component created...")
  }
  changeName(nameRef:any){
    this.name = nameRef.value;
  }
  ngOnInit() {
    console.log("parent ngOn Init method called...")
  }
  ngOnChanges() {
    console.log("Parent component ngOnChange")
  }
  ngDoCheck() {
    console.log("parent ngDoCheck function")
  }
  ngAfterContentInit() {
    console.log("parent content initialization")
  }
  ngAfterViewInit() {
    console.log("parent view initialization")
  }
  ngAfterViewChecked(){
    console.log("parent view checked")
  }
 ngAfterContentChecked() {
  console.log("parent content checked")
  }
}

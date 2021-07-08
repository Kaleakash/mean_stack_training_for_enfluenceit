import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  passData(nameRef:any){
    let fname = nameRef.value;
    console.log(fname);
    console.log(nameRef)
  }
}

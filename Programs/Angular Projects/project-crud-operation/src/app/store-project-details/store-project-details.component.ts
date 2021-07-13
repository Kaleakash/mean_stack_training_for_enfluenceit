import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-store-project-details',
  templateUrl: './store-project-details.component.html',
  styleUrls: ['./store-project-details.component.css']
})
export class StoreProjectDetailsComponent implements OnInit {
  projectRef = new FormGroup({
    _id:new FormControl(),
    typeOfTech:new FormControl(),
    numberOfEmp:new FormControl()
  });

  msg:string=""
  constructor(public ps:ProjectsService) { } //DI for ProjectService

  ngOnInit(): void {
  }

  storeProjectDetails(){
    let project = this.projectRef.value;
    //console.log(project);
    this.ps.storeProjectDetails(project).
    subscribe((result:any)=>this.msg=result,(error:any)=>this.msg=error);
    this.projectRef.reset();
  }
}



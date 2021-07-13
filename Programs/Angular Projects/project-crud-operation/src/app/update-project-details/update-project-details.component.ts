import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-update-project-details',
  templateUrl: './update-project-details.component.html',
  styleUrls: ['./update-project-details.component.css']
})
export class UpdateProjectDetailsComponent implements OnInit {

  constructor(public ps:ProjectsService) { }  //DI for ProjectService

  ngOnInit(): void {
  }

  updateProject(projectRef:NgForm){
    let project = projectRef.value;
    this.ps.updateProject(project);
    //console.log(project);
    projectRef.reset();
  }
}

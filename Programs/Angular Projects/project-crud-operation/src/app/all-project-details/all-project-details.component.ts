import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-all-project-details',
  templateUrl: './all-project-details.component.html',
  styleUrls: ['./all-project-details.component.css']
})
export class AllProjectDetailsComponent implements OnInit {
  projects:Array<Projects>=[];
  f1:boolean = false;
  constructor(public ps:ProjectsService) { }    // DI for user-defined service.

  ngOnInit(): void {
  }
  loadData(){
    this.f1 = true;
    this.ps.getAllProjectDetails().subscribe(result=>this.projects=result,
      error=>console.log(error))
  }
}

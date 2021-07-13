import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-delete-project-by-id',
  templateUrl: './delete-project-by-id.component.html',
  styleUrls: ['./delete-project-by-id.component.css']
})
export class DeleteProjectByIdComponent implements OnInit {

  constructor(public ps:ProjectsService) { } //DI

  ngOnInit(): void {
  }

  deleteProject(idRef:any){
    let id = idRef.value;
    this.ps.deleteProjectBId(id);
  }
}

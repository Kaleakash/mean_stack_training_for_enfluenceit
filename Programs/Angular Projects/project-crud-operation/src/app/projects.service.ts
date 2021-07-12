import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects.model';

@Injectable({
  providedIn: 'root'  // it is equal to provider attribute in module level.
})
export class ProjectsService {
  rootUrl='http://localhost:9090/api/project'
  
  constructor(public http:HttpClient) { } // DI for HttpClient

  // getAllProjectDetails(){
  //   this.http.get(this.rootUrl+"/getAppProjectDetails").
  //   subscribe(result=>console.log(result),error=>console.log(error),
  //   ()=>console.log("Completed.."));
  // }

  getAllProjectDetails():Observable<Projects[]> {
      return this.http.get<Projects[]>(this.rootUrl+"/getAppProjectDetails")
    }
}

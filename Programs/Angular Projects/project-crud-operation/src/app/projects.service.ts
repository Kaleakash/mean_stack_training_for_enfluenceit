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

    // post method takes 2 parameter 
    //1st url and 2nd json data.
  storeProjectDetails(project:Projects):any{
    return this.http.post(this.rootUrl+"/storeProjectDetails",{project},{responseType:'text'})
  }
  //put method take 2 parameter 
  //1t url and 2nd json (partial json)
  updateProject(project:Projects){
    this.http.put(this.rootUrl+"/updateProjectInfo/"+project._id,project).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  deleteProjectBId(id:any){
    this.http.delete(this.rootUrl+"/deleteProjectInfo/"+id,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}



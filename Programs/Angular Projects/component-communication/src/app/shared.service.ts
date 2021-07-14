import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'      // singleton object createt n every component
})
export class SharedService {
  
  private studentNames?:Array<string>;
  
  constructor() { }

  //setter function 
  setStudentNames(studentNames:Array<string>):void {
    this.studentNames=studentNames;
  }

  //getter function 
  getStudentNames(): Array<string> |  undefined{
    return this.studentNames;
  }
}

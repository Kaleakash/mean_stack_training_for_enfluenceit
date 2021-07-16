import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  displayServiceMsg(): string {
    return "Welcome to My Service class";
  }
}

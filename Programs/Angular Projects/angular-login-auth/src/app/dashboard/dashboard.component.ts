import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmailName?:string;
  constructor(public activateRouter:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(data=>this.userEmailName=data.email);
  }

  logout() {
    sessionStorage.removeItem("secret");
    this.router.navigate(["login"])
  }
}

import { Component, OnInit } from '@angular/core';
import { MyFakeService } from '../fake.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.css']
})
export class FakeComponent implements OnInit {

  constructor(public fSer:MyFakeService) { }

  ngOnInit(): void {
  }

  loadData(){
    this.fSer.loadFakeService();
  }
}

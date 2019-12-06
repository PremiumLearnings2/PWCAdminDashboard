import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
display = 'none';
display2 = 'none';

  constructor() { }

  ngOnInit() {
  }
  DisplayCampaign() {
    this.display = 'block';
    this.display2 = 'none';
  }
  DisplayMessage() {
    this.display2 = 'block';
    this.display = 'none';
  }

}

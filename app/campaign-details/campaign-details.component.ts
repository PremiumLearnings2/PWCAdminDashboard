import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {
  display3 = 'none';
  campaignID: number;
  campaignName: string;
  CampaignForm = new FormGroup({
    name: new FormControl(''),
  });
  campaignDetails: any[] = [
      { campaignID: 1, campaignName: 'Name1' },
      { campaignID: 2, campaignName: 'Name2' },
      { campaignID: 3, campaignName: 'Name3' },
      { campaignID: 4, campaignName: 'Name4' },
      { campaignID: 5, campaignName: 'Name5' }
];
  constructor() { }

  ngOnInit() {
  }
  delete() {
    // delete logic
  }

  onSubmit() {

  }
   openModal() {

          this.display3 = 'block';
       }

      onClose() {
        this.display3 = 'none';
      }
}

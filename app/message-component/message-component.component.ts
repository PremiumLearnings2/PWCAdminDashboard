import { CampaignDetailsComponent } from './../campaign-details/campaign-details.component';
import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements AfterViewInit {

@ViewChild(CampaignDetailsComponent, {static: false}) CampaignDetails;

CampaignDetail = this.CampaignDetails;
display4 = 'none';
templateName: string;
templateBody: string;
MessageForm = new FormGroup({
  name: new FormControl(''),
  body: new FormControl(''),
});
MessageDetails: any[] = [
{templateName: 'Message1', templateBody: 'Welcome'},
{templateName: 'Message2', templateBody: 'Welcome'},
{templateName: 'Message3', templateBody: 'Welcome'},
{templateName: 'Message4', templateBody: 'Welcome'},
{templateName: 'Message5', templateBody: 'Welcome'}
];
  constructor() { }

  ngAfterViewInit() {
  }
  delete() {
    // delete logic
  }

  onSubmit() {

  }
   openModal() {

          this.display4 = 'block';
          console.log(this.CampaignDetail.campaignName);
       }

      onClose() {
        this.display4 = 'none';
      }
}


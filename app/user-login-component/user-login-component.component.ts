import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login-component',
  templateUrl: './user-login-component.component.html',
  styleUrls: ['./user-login-component.component.css']
})
export class UserLoginComponentComponent implements OnInit {
  display = 'none';
  constructor() { }

  ngOnInit() {
    this.openModal();
  }
   openModal() {

          this.display = 'block';
       }
   onCloseHandled() {

            this.display = 'none';
         }
}



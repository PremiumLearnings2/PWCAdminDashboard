import { MessageComponentComponent } from './message-component/message-component.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 { path: 'loginPage', component: UserLoginComponentComponent },
 { path: '', redirectTo: '/loginPage', pathMatch: 'full'},
 { path: 'dashboard', component: DashboardComponent },
 { path: 'dashboard/Campaign', component: CampaignDetailsComponent },
 { path: 'dashboard/Message', component: MessageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

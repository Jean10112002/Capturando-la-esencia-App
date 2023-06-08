import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/container/home.component';
import { ProfileComponent } from './pages/profile/container/profile.component';
import { ReportComponent } from '../public/pages/report/container/report.component';

//Components


const routes: Routes = [

  {path:'home', component : HomeComponent },

  {path:'profile', component : ProfileComponent },
  {path:'report', component : ReportComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

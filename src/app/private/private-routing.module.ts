import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/container/home.component';
import { ProfileComponent } from './pages/profile/container/profile.component';
import { ReportComponent } from './pages/report/container/report.component';
import { CalificacionComponent } from './pages/calificacion/container/calificacion.component';

//Components


const routes: Routes = [

  {path:'home', component : HomeComponent },

  {path:'profile', component : ProfileComponent },
  {path:'reporte', component : ReportComponent },
  {path:'calificacion', component : CalificacionComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

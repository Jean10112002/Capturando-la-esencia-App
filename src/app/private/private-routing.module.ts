import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/container/home.component';
import { ProfileComponent } from './pages/profile/container/profile.component';
import { ReportComponent } from './pages/report/container/report.component';
import { CalificacionComponent } from './pages/calificacion/container/calificacion.component';

//Components


const routes: Routes = [

  {path:'home', component : HomeComponent,title:'Home' },

  {path:'profile', component : ProfileComponent,title:'Profile' },
  {path:'reporte', component : ReportComponent,title:'Reporte' },
  {path:'calificacion', component : CalificacionComponent,title:'Calificacion' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/container/login.component';
import { ReportComponent } from './pages/report/container/report.component';


const routes: Routes = [
  {path : '',component:PublicComponent,children:
  [
    {path:'',redirectTo:'login',pathMatch: 'full'},
    {path:'login', component : LoginComponent },
    {path:'report', component : ReportComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

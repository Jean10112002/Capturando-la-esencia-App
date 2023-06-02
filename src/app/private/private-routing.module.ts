import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/container/home.component';

//Components


const routes: Routes = [
  {path : '',component:PrivateComponent,children:
  [
    {path:'home', component : HomeComponent },

  ]}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/container/home.component';




@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    PrivateRoutingModule,
    CommonModule
  ]
})
export class PrivateModule { }

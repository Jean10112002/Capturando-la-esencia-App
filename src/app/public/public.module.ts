import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
//Modulos Compartidos
import { SharedModule } from '../core/shared/shared.module';
//Componentes
import { LoginComponent } from './pages/login/container/login.component';
import { PublicComponent } from './public.component';
import { ReportComponent } from './pages/report/container/report.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    ReportComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule

  ],
  exports:[

  ],
  providers:[]
})
export class PublicModule {
  constructor(){}
 }

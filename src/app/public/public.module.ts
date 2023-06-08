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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


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
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,

  ],
  exports:[

  ],
  providers:[]
})
export class PublicModule {
  constructor(){}
 }

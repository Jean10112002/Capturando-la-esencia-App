import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
//Modulos Compartidos
import { SharedModule } from '../core/shared/shared.module';
//Componentes
import { LoginComponent } from './login/container/login.component';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule,
    SharedModule

  ],
  exports:[

  ]
})
export class PublicModule {
  constructor(){}
 }

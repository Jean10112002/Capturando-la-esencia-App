import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
//Modulos Compartidos
import { SharedModule } from '../core/shared/shared.module';
//Componentes
import { LoginComponent } from './pages/login/container/login.component';
import { PublicComponent } from './public.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from '../core/shared/components/toast/toast.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,

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
  providers:[
  ]
})
export class PublicModule {
  constructor(){}
 }

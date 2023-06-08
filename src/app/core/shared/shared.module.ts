import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//componentes
import { LostComponent } from './components/lost/lost.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from '../../public/services/auth.service';
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
import { SpinnerInterceptor } from './interceptor/spinner.interceptor';

@NgModule({
  declarations: [
    LostComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule

  ],
  exports:[
    RouterModule,
    HttpClientModule,
    LostComponent
  ],
  providers:[

  ]
})
export class SharedModule { }

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
import { ToastComponent } from './components/toast/toast.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LostComponent,
    NavbarComponent,
    ProgressBarComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right",
    }),
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    LostComponent,
    ProgressBarComponent,

  ],
  providers:[

  ]
})
export class SharedModule { }

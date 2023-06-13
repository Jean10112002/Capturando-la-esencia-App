import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//componentes
import { LostComponent } from './components/lost/lost.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './materialComponents/Material.module';

@NgModule({
  declarations: [
    LostComponent,
    NavbarComponent,
    ProgressBarComponent,
    SpinnerComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-right",
    }),
    MaterialModule
  ],
  exports:[
    RouterModule,
    HttpClientModule,
    LostComponent,
    ProgressBarComponent,
    SpinnerComponent,

  ],
  providers:[

  ]
})
export class SharedModule { }

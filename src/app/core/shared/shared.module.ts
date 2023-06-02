import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//componentes
import { LostComponent } from './components/lost/lost.component';
import { NavbarComponent } from './components/navbar/navbar.component';

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
  ]
})
export class SharedModule { }

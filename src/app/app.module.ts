import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Importaciones adicionales del mismo angular
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Modulos

import { MaterialModule } from './core/shared/materialComponents/Material.module';

//Componentes
import { CrearComponent } from './private/home/components/crear/crear.component';






@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
//Angular
    FormsModule,
    ReactiveFormsModule,
//Modulos

//Angular Material
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


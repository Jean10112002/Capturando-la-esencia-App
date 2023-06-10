import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Importaciones adicionales del mismo angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importaciones adicionales del mismo angular


//Modulos
import { MaterialModule } from './core/shared/materialComponents/Material.module';
import { AuthInterceptorInterceptor } from './core/shared/interceptor/auth-interceptor.interceptor';
import { SpinnerInterceptor } from './core/shared/interceptor/spinner.interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PermissionGuard } from './core/shared/guards/permission/permission.guard';
import { AuthService } from './public/services/auth.service';
//Componentes




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,

    //Modulos

    //Angular Material
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
    PermissionGuard,
    AuthService

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes


//Guard
import { AuthGuard } from './core/shared/guards/auth/auth.guard';

import { LostComponent } from './core/shared/components/lost/lost.component';
import { PermissionGuard } from './core/shared/guards/permission/permission.guard';




const routes: Routes = [
  //Rutas Publicas

 {path:'',
 loadChildren:()=> import('./public/public.module').then(m=> m.PublicModule),
 canActivate:[PermissionGuard]
},


  //Rutas Privadas

 {
  path: '',
  loadChildren:()=> import('./private/private.module').then(m=> m.PrivateModule),
 canActivate: [AuthGuard] // Utiliza el guardia para proteger la ruta */
},


//Error 404
{path:'**',
    component : LostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
  providers: [AuthGuard] // Registrar el guardia
})
export class AppRoutingModule { }

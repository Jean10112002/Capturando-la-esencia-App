import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './pages/home/container/home.component';
import { CrearComponent } from './pages/home/components/crear/crear.component';
import { MaterialModule } from '../core/shared/materialComponents/Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/container/profile.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { UserInformationComponent } from './pages/home/components/user-information/user-information.component';
import { PostComponent } from './pages/home/components/post/post.component';
import { SearchUserComponent } from './pages/home/components/search-user/search-user.component';
import { ListUserComponent } from './pages/home/components/list-user/list-user.component';
import { ListUserLikePostComponent } from './pages/home/components/list-user-like-post/list-user-like-post.component';
import { ShowPostComponent } from './pages/home/components/show-post/show-post.component';
import { PhotoGalleryComponent } from './pages/profile/components/photo-gallery/photo-gallery.component';
import { CalificarPostComponent } from './pages/home/components/calificar-post/calificar-post.component';
import { CalificacionService } from './services/calificacion.service';
import { CategoriaService } from './services/categoria.service';
import { ComentarioService } from './services/comentario.service';
import { InteraccionService } from './services/interaccion.service';
import { ParticipanteService } from './services/participante.service';
import { PostService } from './services/post.service';
import { ImagenService } from './services/imagen.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInformationService } from './services/user-information.service';
import { ReportComponent } from './pages/report/container/report.component';
import { CalificacionComponent } from './pages/calificacion/container/calificacion.component';

import { NgSelectModule } from '@ng-select/ng-select'; // Importa el módulo
import { ToastComponent } from '../core/shared/components/toast/toast.component';
import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,

    CrearComponent,
     ProfileComponent,
     NavbarComponent,
     UserInformationComponent,
     PostComponent,
     SearchUserComponent,
     ListUserComponent,
     ListUserLikePostComponent,
     ShowPostComponent,
     PhotoGalleryComponent,
     CalificarPostComponent,
     ReportComponent,
     CalificacionComponent,


  ],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    HttpClientModule,
    //Angular
    FormsModule,
    ReactiveFormsModule,

    //Angular Matirial
    MaterialModule,
    //Filter
    NgSelectModule
  ],
  providers:[
    //aqui van los servicios inyectados para que sean proveidos los demas componentes de este modulo
    CalificacionService,
    CategoriaService,
    ComentarioService,
    InteraccionService,
    ParticipanteService,
    PostService,
    ImagenService,
    UserInformationService,


  ]
})
export class PrivateModule { }

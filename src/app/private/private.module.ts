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
     CalificarPostComponent

  ],
  imports: [
    PrivateRoutingModule,
    CommonModule,
    //Angular
    FormsModule,
    ReactiveFormsModule,

    //Angular Matirial
    MaterialModule
  ],

})
export class PrivateModule { }

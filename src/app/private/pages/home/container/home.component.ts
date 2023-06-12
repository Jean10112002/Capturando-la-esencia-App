import { Component } from '@angular/core';

//Importaciones para abrir el Cuadro de Dialogo de Crear
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { AuthService } from 'src/app/public/services/auth.service';
import {  UserI, UserProfileI } from 'src/app/public/interfaces/Login.response.interface';
import { Observable } from 'rxjs';
import { Participante, PostAllPaginateI } from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent {


  user!:UserI | Participante;
  posts$!:Observable<PostAllPaginateI>;
  showDialog = false;
  constructor(private readonly authService:AuthService,private readonly userDataService:UserInformationService,private readonly postService:PostService){
    authService.userInformation().subscribe((user:UserProfileI)=>{
      this.user=user.user
      if(this.user.rol==='jurado'){
        this.userDataService.setInformationUser(user.user);
      }
      if(this.user.rol==='participante'){
        this.userDataService.setInformationParticipante(user.user);
      }
    })
    this.posts$=postService.getPosts();
  }
    openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
  //Funcion para abrir el Crear.Component.html como Cuadro de dialogo
/*   openDialog(): void {
    const dialogRef = this.dialog.open(CrearComponent, {

     // panelClass: 'custom-dialog'
      // Otras opciones de configuración del modal
    });

    //Obtener datos del Cuadro del Dialogo de crear
    dialogRef.afterClosed().subscribe(result => {
      // Realiza alguna acción después de cerrar el cuadro de diálogo si es necesario
      console.log('Resultado del cuadro de diálogo:', result);
    });
  }*/
}

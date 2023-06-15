import { Component } from '@angular/core';

//Importaciones para abrir el Cuadro de Dialogo de Crear
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { AuthService } from 'src/app/public/services/auth.service';
import {  UserI, UserProfileI } from 'src/app/public/interfaces/Login.response.interface';
import { Observable, map } from 'rxjs';
import { Participante, PostAllPaginateI, Posts } from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserCommentsComponent } from '../components/modal-user-comments/modal-user-comments.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent {

  user!:UserI | Participante;
  posts$!:Observable<Posts>;
  showDialog = false;
  constructor(private readonly authService:AuthService,private readonly userDataService:UserInformationService,private readonly postService:PostService,private dialog: MatDialog){
    authService.userInformation().subscribe((user:UserProfileI)=>{
      this.user=user.user
      if(this.user.rol==='jurado'){
        this.userDataService.setInformationUser(user.user);
      }
      if(this.user.rol==='participante'){
        this.userDataService.setInformationParticipante(user.user);
      }
    })
    this.posts$=postService.getPosts().pipe(map((res:any)=>res.Posts));
  }
  recibirCategoria(event:number){
    if(event==0){
      this.posts$=this.postService.getPosts().pipe(map((result)=>result.Posts));
    }else{
      this.posts$=this.postService.getPostsByCategory(event).pipe(map((result:any)=>result.PostCategoria));

    }
    console.log(event)
  }

  /* esta funcion esat solo aqui por la cards estatica */

  openDialog() {
    const dialogRef = this.dialog.open(ModalUserCommentsComponent, {  width:'30%', minWidth:'292px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

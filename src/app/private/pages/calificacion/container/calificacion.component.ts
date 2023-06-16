import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostWithoutCalificationI } from 'src/app/private/interfaces/post/post.withoutCalification.interface';
import { PostService } from 'src/app/private/services/post.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss'],
})
export class CalificacionComponent {
  jurado!: UserI;
 /*  postWithoutCalification$: Observable<PostWithoutCalificationI>; */
  constructor(
     juradoDataService: UserInformationService,
     private readonly router:Router,
    private readonly postService:PostService) {
      juradoDataService.getData().subscribe((jurado)=>{
      if(jurado.rol===''||jurado.rol!='jurado'){
        this.router.navigate(['/home'])
      }else{
        this.jurado=jurado;
      }

    });
   /*  this.postWithoutCalification$=postService.getPostsWithoutCalificacion(); */
  }
  /* recibirCategoria(event:number){
    console.log(event)
    if(event==0){
      this.postWithoutCalification$=this.postService.getPostsWithoutCalificacion();
    }else{
      this.postWithoutCalification$=this.postService.getPostsByCategoryWithoutCalification(event);
    }
  } */
}

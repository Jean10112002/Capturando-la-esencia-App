import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { InteraccionService } from 'src/app/private/services/interaccion.service';
import { PostService } from 'src/app/private/services/post.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';
import { ModalUserCommentsComponent } from '../../../home/components/modal-user-comments/modal-user-comments.component';
import { ListUserLikePostComponent } from '../../../home/components/list-user-like-post/list-user-like-post.component';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';
import { eventEmissorI } from 'src/app/private/interfaces/event-emissor/event-emissor.interface';
import { ModalCalificarPostComponent } from '../../../home/components/modal-calificar-post/modal-calificar-post.component';
import { DatePipe } from '@angular/common';
import { ModalImgExpandirComponent } from '../../../home/components/modal-img-expandir/modal-img-expandir.component';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss'],
})
export class ModalPostComponent implements OnInit, OnDestroy {
  avatar: string = config.avatarUrl;
  user!: Participante;
  isLikeOfMe!: boolean;
  like_id!: number;
  likeCount!: number;
  postCount!: number;
  post!: Datum;
  private destroy$ = new Subject<void>();

  userAdminJurado$!: Observable<UserI>;
  user$: Observable<Participante> =
    this.dataServiceUser.getInformationParticipante();



    currentDateTime!: any;
    //calificar
    startCalificar = config.startCalificar;
    endCalificar = config.endCalificar;
    isInDateRangeCalificar!: any;
    isInTimeRangeCalificar!: any;
    shouldShowComponentCalificar!: boolean;
    //photo participante
    startPhotoParticipante = config.startPhotoParticipante;
    endPhotoParticipante = config.endPhotoParticipante;
    isInDateRangePhotoParticipante!: any;
    isInTimeRangePhotoParticipante!: any;
    shouldShowComponentPhotoParticipante!: boolean;
  constructor(
    private readonly dataServiceUser: UserInformationService,
    private readonly interaccionService: InteraccionService,
    private readonly dialog: MatDialog,
    private readonly postService: PostService,
    private readonly notify: ToastrService,
    private readonly eventEmissorService:EnventEmissorService,
    @Inject(MAT_DIALOG_DATA) private id_post: number,
    private readonly datePipe:DatePipe
  ) {
    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    );
    //calfiicar
    this.isInDateRangeCalificar =
      this.currentDateTime >= this.startCalificar &&
      this.currentDateTime <= this.endCalificar;
    this.isInTimeRangeCalificar =
      this.currentDateTime.split(' ')[1] >= this.startCalificar.split(' ')[1] &&
      this.currentDateTime.split(' ')[1] <= this.endCalificar.split(' ')[1];
    this.shouldShowComponentCalificar =
      this.isInDateRangeCalificar && this.isInTimeRangeCalificar;
    //partiicpante
    this.isInDateRangePhotoParticipante =
      this.currentDateTime >= this.startPhotoParticipante &&
      this.currentDateTime <= this.endPhotoParticipante;
    this.isInTimeRangePhotoParticipante =
      this.currentDateTime.split(' ')[1] >= this.startPhotoParticipante.split(' ')[1] &&
      this.currentDateTime.split(' ')[1] <= this.endPhotoParticipante.split(' ')[1];
    this.shouldShowComponentPhotoParticipante =
      this.isInDateRangeCalificar && this.isInTimeRangeCalificar;
    this.userAdminJurado$ = this.dataServiceUser.getData();
    this.user$ = this.dataServiceUser.getInformationParticipante();
    this.postService.getPost(this.id_post).subscribe((data) => {
      this.post = data;
      this.likeCount = this.post?.like.length;
      this.postCount=this.post?.comentario__post.length;
      this.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: Participante) => {
          this.verifyIDoLike(user);
          this.user = user;
        });
    });
    eventEmissorService.getEvent().pipe(takeUntil(this.destroy$)).subscribe((event:eventEmissorI)=>{
      if(event.event=='AUMENTAR_COMENTARIO'&&event.id==this.post.id){
        this.postCount++;
      }
      if (event.event == 'CALIFICACION_CREADA' && event.id == this.post.id) {
        this.postService
          .getPost(this.post.id)
          .subscribe((post) => (this.post = post));
      }
    })
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  desactiveModal(){
    this.dialog.closeAll()
  }
  deletePost() {
    this.postService.deletePost(this.post.id).subscribe((res) => {
      this.notify.success('Post Eliminado Correctamente', 'Proceso Exitoso');
      this.dialog.closeAll();
      this.sendEventUpdateParticipante();
    });
  }
  sendEventUpdateParticipante(){
    this.eventEmissorService.setEvent({
      event:'POST_ELIMINADO',
      id:this.post.id
    });
  }
  sendEventAddLike(){
    this.eventEmissorService.setEvent({
      event:'LIKE_AGREGAR',
      id:this.post.id
    });
  }
  sendEventRemoveLike(){
    this.eventEmissorService.setEvent({
      event:'LIKE_QUITAR',
      id:this.post.id
    });
  }

  likePost() {
    if (this.isLikeOfMe) {
      this.interaccionService.deleteLike(this.like_id).subscribe((res) => {
        this.isLikeOfMe = false;
        this.likeCount--;
        this.sendEventRemoveLike();
      });
    } else {
      this.interaccionService
        .createLike({ post_id: this.post.id })
        .subscribe((res: any) => {
          this.isLikeOfMe = true;
          this.like_id = res.Post.id;
          this.likeCount++;
          this.sendEventAddLike()
        });
    }
  }
  verifyIDoLike(user: Participante): boolean {
    const userExist = this.post?.like.filter(
      (id) => user.id == id.participante_id
    );
    if (userExist?.length > 0) {
      console.log(userExist);
      this.like_id = userExist[0].id;
      this.isLikeOfMe = true;
      return true;
    }
    return false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalUserCommentsComponent, {
      width: '80%',
      minWidth: '292px',
      data: this.post.id,
    });
  }
  openModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    console.log(this.post.like);
    this.dialog.open(ListUserLikePostComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.post,
    });
  }
  openDialogCalificar() {
     this.dialog.open(ModalCalificarPostComponent,{
      data:this.post
    });


  }
  verifyThisPostCalificated(user:UserI):boolean{
    const post:any=this.post.calificacion.filter(post=>post.user_id==user.id);
    console.log(post)
    if(post.length>0){
      return true;
    }else{
      return false
    }
  }
  openDialogExpandir(imagen:string) {
    this.dialog.open(ModalImgExpandirComponent,{
      data:imagen
    });
  }
}

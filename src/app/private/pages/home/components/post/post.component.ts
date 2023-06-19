import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, filter, map, takeUntil } from 'rxjs';
import {
  Datum,
  Participante,
} from 'src/app/private/interfaces/post/post.interface';
import { InteraccionService } from 'src/app/private/services/interaccion.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';
import { ListUserLikePostComponent } from '../list-user-like-post/list-user-like-post.component';
import { ModalUserCommentsComponent } from '../modal-user-comments/modal-user-comments.component';
import { PostService } from 'src/app/private/services/post.service';
import { ToastrService } from 'ngx-toastr';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';
import { eventEmissorI } from 'src/app/private/interfaces/event-emissor/event-emissor.interface';
import { CalificarPostComponent } from '../calificar-post/calificar-post.component';
import { ModalCalificarPostComponent } from '../modal-calificar-post/modal-calificar-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: Datum;
  @Output() eventEmiiter = new EventEmitter<any>();
  isLikeOfMe!: boolean;
  like_id!: number;
  likeCount!: number;
  postCount!: number;
  private destroy$ = new Subject<void>();

  avatar: string = config.avatarUrl;
  user!: Participante;
  userAdminJurado$!: Observable<UserI>;
  user$: Observable<Participante> =
    this.dataServiceUser.getInformationParticipante();
  constructor(
    private readonly dataServiceUser: UserInformationService,
    private readonly interaccionService: InteraccionService,
    private readonly dialog: MatDialog,
    private readonly postService: PostService,
    private readonly notify: ToastrService,
    private readonly eventEmissorService: EnventEmissorService
  ) {
    this.userAdminJurado$ = this.dataServiceUser.getData();
    this.user$ = this.dataServiceUser.getInformationParticipante();
    eventEmissorService
      .getEvent()
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: eventEmissorI) => {
        if (event.event == 'AUMENTAR_COMENTARIO' && event.id == this.post.id) {
          this.postCount++;
        }
        if (event.event == 'CALIFICACION_CREADA' && event.id == this.post.id) {
          this.postService
            .getPost(this.post.id)
            .subscribe((post) => (this.post = post));
        }
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: Participante) => {
        this.verifyIDoLike(user);
        this.user = user;
      });
    this.likeCount = this.post?.like.length;
    this.postCount = this.post?.comentario__post.length;
  }
  deletePost() {
    this.postService.deletePost(this.post.id).subscribe((res) => {
      this.notify.success('Post Eliminado Correctamente', 'Proceso Exitoso');
      this.eventEmiiter.emit(this.post.categoria_id);
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

  likePost() {
    if (this.isLikeOfMe) {
      this.interaccionService.deleteLike(this.like_id).subscribe((res) => {
        this.isLikeOfMe = false;
        this.likeCount--;
      });
    } else {
      this.interaccionService
        .createLike({ post_id: this.post.id })
        .subscribe((res: any) => {
          this.isLikeOfMe = true;
          this.like_id = res.Post.id;
          this.likeCount++;
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

  openDialogComment() {
    const dialogRef = this.dialog.open(ModalUserCommentsComponent, {
      width: '80%',
      minWidth: '292px',
      data: this.post.id,
    });
  }

  openDialogCalificar() {
    const dialogRef = this.dialog.open(ModalCalificarPostComponent, {
      data: this.post,
    });
  }
  verifyThisPostCalificated(user: UserI): boolean {
    const post: any = this.post.calificacion.filter(
      (post) => post.user_id == user.id
    );
    console.log(post);
    if (post.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

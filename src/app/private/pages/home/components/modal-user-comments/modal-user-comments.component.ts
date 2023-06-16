import { Component, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, takeUntil,pipe } from 'rxjs';
import {
  Datum,
  Participante,
} from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-modal-user-comments',
  templateUrl: './modal-user-comments.component.html',
  styleUrls: ['./modal-user-comments.component.scss'],
})
export class ModalUserCommentsComponent implements OnDestroy {
  post$: Observable<Datum>;
  isCommentOfMe!: boolean;
  user!:Participante;
  user$: Observable<Participante> =
    this.dataServiceUser.getInformationParticipante();
    private destroy$ = new Subject<void>();
  constructor(
    private readonly dataServiceUser: UserInformationService,
    private readonly postService: PostService,
    public dialogRef: MatDialogRef<PostComponent>,

    @Inject(MAT_DIALOG_DATA) public post_id: number
  ) {
    this.post$ = this.postService.getPost(post_id);
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user: Participante) => {
      this.verifyIDoComment(user);
      this.user=user;
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  recibirPost(event: number) {
    this.post$ = this.postService.getPost(event);
    this.isCommentOfMe = false;
  }

  verifyIDoComment(user: Participante): void {
    this.post$.subscribe((post) => {
      const userExist = post.comentario__post.filter(
        (id) => user.id == id.participante_id
      );
      if (userExist?.length > 0) {
        this.isCommentOfMe = false;
      } else {
        this.isCommentOfMe = true;
      }
    });
  }
}

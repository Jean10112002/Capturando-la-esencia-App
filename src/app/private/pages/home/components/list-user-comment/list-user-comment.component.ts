import { Component, Input } from '@angular/core';
import { ComentarioPost } from 'src/app/private/interfaces/post/post.interface';
import { config } from 'src/config/config';
import { ModalUserCommentsComponent } from '../modal-user-comments/modal-user-comments.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user-comment',
  templateUrl: './list-user-comment.component.html',
  styleUrls: ['./list-user-comment.component.scss']
})
export class ListUserCommentComponent  {
  avatar:string=config.avatarUrl;
  @Input() participante!:ComentarioPost;
  constructor(
    public dialogRef: MatDialogRef<ModalUserCommentsComponent>,
    private readonly route: Router,

  ){

  }
  goToProfile(id:number){
    this.dialogRef.close();
    this.route.navigate(['/profile',id])
  }
}

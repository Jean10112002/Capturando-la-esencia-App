import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { Router } from '@angular/router';
import { Datum, Like, Participante } from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';
import { Post } from 'src/app/private/interfaces/post/post.withoutCalification.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user-like-post',
  templateUrl: './list-user-like-post.component.html',
  styleUrls: ['./list-user-like-post.component.scss'],
})
export class ListUserLikePostComponent {
  post$!:Observable<Datum>;
  constructor(
    public dialogRef: MatDialog,
    private readonly route: Router,
    private readonly postService:PostService,
    @Inject(MAT_DIALOG_DATA) public Participante: Datum
  ) {
    this.post$=postService.getPost(Participante.id)
  }
  goToProfile(id:number){
    this.dialogRef.closeAll();
    this.route.navigate(['/profile',id])
  }
}

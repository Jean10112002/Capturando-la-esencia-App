import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { Router } from '@angular/router';
import { Like, Participante } from 'src/app/private/interfaces/post/post.interface';

@Component({
  selector: 'app-list-user-like-post',
  templateUrl: './list-user-like-post.component.html',
  styleUrls: ['./list-user-like-post.component.scss'],
})
export class ListUserLikePostComponent {
  constructor(
    public dialogRef: MatDialogRef<PostComponent>,
    private readonly route: Router,
    @Inject(MAT_DIALOG_DATA) public Participante: Like[]
  ) {
    console.log(Participante)
  }
  goToProfile(id:number){
    this.dialogRef.close();
    this.route.navigate(['/profile',id])
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { Post } from 'src/app/private/interfaces/post/post.withoutCalification.interface';
import { PostService } from 'src/app/private/services/post.service';

@Component({
  selector: 'app-modal-user-comments',
  templateUrl: './modal-user-comments.component.html',
  styleUrls: ['./modal-user-comments.component.scss']
})
export class ModalUserCommentsComponent {
  post$:Observable<Datum>;
  constructor(private readonly postService:PostService,
    @Inject(MAT_DIALOG_DATA) public post_id: number){
      this.post$=this.postService.getPost(post_id)
  }
}

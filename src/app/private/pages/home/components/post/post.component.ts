import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter, map } from 'rxjs';
import {
  Datum,
  Participante,
} from 'src/app/private/interfaces/post/post.interface';
import { InteraccionService } from 'src/app/private/services/interaccion.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';
import { ListUserLikePostComponent } from '../list-user-like-post/list-user-like-post.component';
import { PostService } from 'src/app/private/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Datum;
  isLikeOfMe!: boolean;
  like_id!: number;
  likeCount!: number;
  avatar: string = config.avatarUrl;
  user!: Participante;
  userAdminJurado$: Observable<UserI> = this.dataServiceUser.getData();
  user$: Observable<Participante> =
    this.dataServiceUser.getInformationParticipante();
  constructor(
    private readonly dataServiceUser: UserInformationService,
    private readonly interaccionService: InteraccionService,
    private readonly dialog: MatDialog,
    private readonly postService: PostService
  ) {}
  ngOnInit(): void {
    this.user$.subscribe((user: Participante) => {
      this.verifyIDoLike(user);
      this.user = user;
    });
    this.likeCount = this.post?.like.length;
  }
  openModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    console.log(this.post.like);
    this.dialog.open(ListUserLikePostComponent, {
      width: '50%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.post.like,
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
}

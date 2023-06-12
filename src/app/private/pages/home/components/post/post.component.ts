import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, Participante } from 'src/app/private/interfaces/post/post.interface';
import { InteraccionService } from 'src/app/private/services/interaccion.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  @Input() post!:Datum;
  isLikeOfMe!:boolean;
  like_id!:number;
  likeCount!:number;
  avatar:string=config.avatarUrl;
  userAdminJurado$:Observable<UserI>=this.dataServiceUser.getData();
  user$:Observable<Participante>=this.dataServiceUser.getInformationParticipante();
  constructor(private readonly dataServiceUser:UserInformationService,private readonly interaccionService:InteraccionService){}
  ngOnInit(): void {
    this.user$.subscribe((user:Participante)=>{
      this.verifyIDoLike(user);
    })
    this.likeCount=this.post?.like.length
  }

  likePost(){
    if(this.isLikeOfMe){
      this.interaccionService.deleteLike(this.like_id).subscribe((res)=>{
        this.isLikeOfMe=false;
        this.likeCount--
      })
    }else{
      this.interaccionService.createLike({post_id:this.post.id}).subscribe((res:any)=>{
        this.isLikeOfMe=true;
        this.like_id=res.Post.id;
        this.likeCount++

      })
    }
  }
  verifyIDoLike(user:Participante):boolean{
    const userExist=this.post?.like.filter(id=>user.id==id.participante_id)
    if(userExist?.length>0){
      console.log(userExist)
      this.like_id=userExist[0].id;
      this.isLikeOfMe=true;
      return true;
    }
    return false;

  }
}

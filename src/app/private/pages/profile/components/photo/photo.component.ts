import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MatDialog, } from '@angular/material/dialog';
import { ModalPostComponent } from '../modal-post/modal-post.component';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';
import { Subject, takeUntil } from 'rxjs';
import { eventEmissorI } from 'src/app/private/interfaces/event-emissor/event-emissor.interface';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { PostService } from 'src/app/private/services/post.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['../../container/profile.component.scss'],

})
export class PhotoComponent implements OnInit,OnDestroy {
  @Input() photo!:Datum
likeCount!:number
commentCount!:number
private destroy$: Subject<void> = new Subject<void>();
constructor(public dialog: MatDialog,eventEmissorService:EnventEmissorService,private readonly postService:PostService) {

    eventEmissorService.getEvent().pipe(takeUntil(this.destroy$)).subscribe((event:eventEmissorI)=>{
      if(event.event=='LIKE_AGREGAR'&&event.id==this.photo.id){
        console.log("agregar like")
        this.likeCount++
      }
      if(event.event=='LIKE_QUITAR'&&event.id==this.photo.id){
        console.log("delete like")

        this.likeCount--
      }
      if(event.event=='AUMENTAR_COMENTARIO'&&event.id==this.photo.id){
        this.commentCount++;
      }

    })
}
ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
  ngOnInit(): void {
    this.likeCount=this.photo.like.length
    this.commentCount=this.photo.comentario__post.length
  }

  openDialog() {
    this.dialog.open(ModalPostComponent,{width:'80%',data:this.photo.id});
  }


}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Datum } from 'src/app/private/interfaces/post/post.interface';

@Component({
  selector: 'app-modal-calificar-post',
  templateUrl: './modal-calificar-post.component.html',
  styleUrls: ['./modal-calificar-post.component.scss']
})
export class ModalCalificarPostComponent {
  post!:Datum;

    constructor(@Inject(MAT_DIALOG_DATA) private postReceived: Datum){
      this.post=this.postReceived;
  }
}

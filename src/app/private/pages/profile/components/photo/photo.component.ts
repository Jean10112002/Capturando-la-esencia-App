import { Component, Input } from '@angular/core';
import { PostI } from 'src/app/private/interfaces/participante/participante.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalPostComponent } from '../modal-post/modal-post.component';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['../../container/profile.component.scss'],

})
export class PhotoComponent {
  @Input() photo!:PostI

constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalPostComponent,{width:'80%',data:this.photo.id});
  }


}

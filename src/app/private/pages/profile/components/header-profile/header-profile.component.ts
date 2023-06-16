import { Component, Input } from '@angular/core';
import { Participante } from 'src/app/private/interfaces/participante/participante.interface';
import { config } from 'src/config/config';
import { ModalPostComponent } from '../modal-post/modal-post.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['../../container/profile.component.scss'],
})
export class HeaderProfileComponent {
  @Input() user!:Participante;
  avatar:string=config.avatarUrl;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalPostComponent,{width:'80%'});
  }

}

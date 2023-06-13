import { Component, Input } from '@angular/core';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { config } from 'src/config/config';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
  @Input() user!:Participante;
  avatar:string=config.avatarUrl;
}

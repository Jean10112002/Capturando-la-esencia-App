import { Component, Input, OnInit } from '@angular/core';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { config } from 'src/config/config';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  @Input() user!:Participante|any;
  avatar:string=config.avatarUrl;
  ngOnInit(): void {

  }

}

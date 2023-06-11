import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  user$:Observable<UserI>=this.dataServiceUser.getData();
  constructor(private readonly dataServiceUser:UserInformationService){}
  avatar:string=config.avatarUrl;
  @Input() post!:Datum;

}

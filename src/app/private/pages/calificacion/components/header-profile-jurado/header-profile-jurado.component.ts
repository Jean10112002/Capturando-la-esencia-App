import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { config } from 'src/config/config';

@Component({
  selector: 'app-header-profile-jurado',
  templateUrl: './header-profile-jurado.component.html',
  styleUrls: ['./header-profile-jurado.component.scss']
})
export class HeaderProfileJuradoComponent {
  avatar:string=config.avatarUrl;
  @Input() jurado!:UserI;
}

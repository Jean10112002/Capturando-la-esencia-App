import { Component, Input } from '@angular/core';
import { PostI } from 'src/app/private/interfaces/participante/participante.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['../../container/profile.component.scss']
})
export class PhotoComponent {
  @Input() photo!:PostI
}

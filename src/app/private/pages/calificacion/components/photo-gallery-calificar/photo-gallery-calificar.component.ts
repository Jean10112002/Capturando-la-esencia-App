import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/private/interfaces/post/post.withoutCalification.interface';

@Component({
  selector: 'app-photo-gallery-calificar',
  templateUrl: './photo-gallery-calificar.component.html',
  styleUrls: ['./photo-gallery-calificar.component.scss']
})
export class PhotoGalleryCalificarComponent {
  @Input() photo!:Datum[]

}

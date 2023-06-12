import { Component, Input } from '@angular/core';
import { PostI } from 'src/app/private/interfaces/participante/participante.interface';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['../../container/profile.component.scss']
})
export class PhotoGalleryComponent {
  @Input() photo!:PostI[]
}

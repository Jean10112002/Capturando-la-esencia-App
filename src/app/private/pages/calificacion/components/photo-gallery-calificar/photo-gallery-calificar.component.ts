import { Component, Input,OnDestroy } from '@angular/core';
import { Datum } from 'src/app/private/interfaces/post/post.interface';
import { Subject} from 'rxjs';
@Component({
  selector: 'app-photo-gallery-calificar',
  templateUrl: './photo-gallery-calificar.component.html',
  styleUrls: ['./photo-gallery-calificar.component.scss']
})
export class PhotoGalleryCalificarComponent{
  @Input() photo!:Datum[]
  private destroy$: Subject<void> = new Subject<void>();
}

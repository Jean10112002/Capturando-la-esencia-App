import { Component, Input } from '@angular/core';

import { Datum } from 'src/app/private/interfaces/post/post.interface';


@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['../../container/profile.component.scss']
})
export class PhotoGalleryComponent {
  @Input() photo!:Datum[]

}

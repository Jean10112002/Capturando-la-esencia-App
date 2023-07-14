import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-img-expandir',
  templateUrl: './modal-img-expandir.component.html',
  styleUrls: ['./modal-img-expandir.component.scss']
})
export class ModalImgExpandirComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public imagen: string){
  }

}

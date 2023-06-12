import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaI } from 'src/app/private/interfaces/categoria/categoria.interface';
import { CategoriaService } from 'src/app/private/services/categoria.service';

@Component({
  selector: 'app-chip-category',
  templateUrl: './chip-category.component.html',
  styleUrls: ['./chip-category.component.scss']
})
export class ChipCategoryComponent {
  categories$:Observable<CategoriaI>;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor(categoryService: CategoriaService){
    this.categories$=categoryService.getCategorias()
  }
  eventCategoria(numero:number){
    this.newItemEvent.emit(numero);
  }
}

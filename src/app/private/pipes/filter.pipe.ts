import { Pipe, PipeTransform } from '@angular/core';
import { Participante } from '../interfaces/post/post.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Participante[], term: string): any[] {
    if (!term || term === '') {
      return items;
    }

    return items.filter(item => item.cedula.toLowerCase().includes(term.toLowerCase()));
  }

}

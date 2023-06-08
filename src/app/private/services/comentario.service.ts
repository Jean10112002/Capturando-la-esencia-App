import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ComentarioI } from '../interfaces/comentario/comentario.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ComentarioService {
  private readonly api = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  getComentarios():Observable<ComentarioI>{
    return this.http.get<ComentarioI>(`${this.api}comentarios`)
  }
}

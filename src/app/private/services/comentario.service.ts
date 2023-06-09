import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentarioI } from '../interfaces/comentario/comentario.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class ComentarioService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}
  getComentarios():Observable<ComentarioI>{
    return this.http.get<ComentarioI>(`${this.api}comentarios`)
  }
}

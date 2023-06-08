import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ComentarioInteraccionI } from '../interfaces/interaccion/comentario.interaccion.interface';
import { LikeInteraccionI } from '../interfaces/interaccion/like.interaccion.interface';

@Injectable()
export class InteraccionService {
  private readonly api = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  createComentario(comentario:ComentarioInteraccionI){
    return this.http.post(`${this.api}interaccion/comentario`,comentario)
  }
  createLike(like:LikeInteraccionI){
    return this.http.post(`${this.api}interaccion/like`,like)

  }
}

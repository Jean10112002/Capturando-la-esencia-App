import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComentarioInteraccionI } from '../interfaces/interaccion/comentario.interaccion.interface';
import { LikeInteraccionI } from '../interfaces/interaccion/like.interaccion.interface';
import { config } from 'src/config/config';

@Injectable()
export class InteraccionService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}
  createComentario(comentario:ComentarioInteraccionI){
    return this.http.post(`${this.api}interaccion/comentario`,comentario)
  }
  createLike(like:LikeInteraccionI){
    return this.http.post(`${this.api}interaccion/like`,like)
  }
  deleteLike(id:number){
    return this.http.delete(`${this.api}interaccion/like/${id}`)
  }

}

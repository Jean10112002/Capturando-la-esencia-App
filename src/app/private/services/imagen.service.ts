import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagenCreateResponseI } from '../interfaces/imagen/imagen.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class ImagenService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}
  createImage(imagen:any):Observable<ImagenCreateResponseI>{
    return this.http.post<ImagenCreateResponseI>(`${this.api}post/imagen`,imagen);
  }
  deleteImage(id:number):Observable<any>{
    return this.http.delete<any>(`${this.api}post/imagen/${id}`);
  }
}

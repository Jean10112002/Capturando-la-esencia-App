import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImagenCreateResponseI, ImagenI } from '../interfaces/imagen/imagen.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class ImagenService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}
  createImage(imagen:ImagenI):Observable<ImagenCreateResponseI>{
    return this.http.post<ImagenCreateResponseI>(`${this.api}post/imagen`,imagen);
  }
}

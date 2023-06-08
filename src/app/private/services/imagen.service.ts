import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ImagenCreateResponseI, ImagenI } from '../interfaces/imagen/imagen.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ImagenService {
  private readonly api = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}
  createImage(imagen:ImagenI):Observable<ImagenCreateResponseI>{
    return this.http.post<ImagenCreateResponseI>(`${this.api}post/imagen`,imagen);
  }
}

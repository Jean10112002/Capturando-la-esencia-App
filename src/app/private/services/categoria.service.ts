import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaI } from '../interfaces/categoria/categoria.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class CategoriaService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}

  getCategorias():Observable<CategoriaI>{
    return this.http.get<CategoriaI>(`${this.api}categoria`)
  }
}

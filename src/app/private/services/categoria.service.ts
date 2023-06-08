import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CategoriaI } from '../interfaces/categoria/categoria.interface';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {
  private readonly api = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  getCategorias():Observable<CategoriaI>{
    return this.http.get<CategoriaI>(`${this.api}categoria`)
  }
}

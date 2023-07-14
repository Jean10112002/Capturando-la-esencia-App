import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalificacionBodyI, CalificacionReporte } from '../interfaces/calificacion/calificacion.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class CalificacionService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}

  crearCalificacion(calificacion:CalificacionBodyI){
    return this.http.post(`${this.api}calificacion`,calificacion);
  }
  reporteCalificaciones():Observable<CalificacionReporte>{
    return this.http.get<CalificacionReporte>(`${this.api}calificacion/reporte`);
  }
}

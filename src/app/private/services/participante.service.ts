import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParticipanteSearchCedulaI,ParticipanteShowI } from '../interfaces/participante/participante.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class ParticipanteService {
  private readonly api = config.apiUrl;
  constructor(private readonly http: HttpClient) {}
  oneParticipante(id:number):Observable<ParticipanteShowI>{
    return this.http.get<ParticipanteShowI>(`${this.api}participante/${id}`)
  }
  oneParticipanteSearchByCedula(cedula:string):Observable<ParticipanteSearchCedulaI>{
    return this.http.get<ParticipanteSearchCedulaI>(`${this.api}participante/search/${cedula}`);
  }
}

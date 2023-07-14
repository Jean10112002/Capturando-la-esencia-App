import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllParticipanteResponseI, ParticipanteSearchCedulaI,ParticipanteShowI } from '../interfaces/participante/participante.interface';
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
    console.log("servicio")
    return this.http.get<ParticipanteSearchCedulaI>(`${this.api}participante/search/${cedula}`);
  }
  allParticipantes():Observable<AllParticipanteResponseI>{
    return this.http.get<AllParticipanteResponseI>(`${this.api}participante`)
  }
}

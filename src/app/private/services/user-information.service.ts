import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { Participante } from '../interfaces/post/post.interface';

@Injectable()
export class UserInformationService {
  private UserInformation$:BehaviorSubject<UserI>=new BehaviorSubject({apellido:'',email:'',id:0,nombre:'Jurado',rol:'',telefono:''});
  private UserInformationParticipante$:BehaviorSubject<Participante>=new BehaviorSubject({cedula:'',email:'',id:0,nombres:'',rol:'',telefono:'',semestre:''});
  constructor() { }
  setInformationUser(value: any): void {
    this.UserInformation$.next(value);
  }

  getData(): Observable<UserI> {
    return this.UserInformation$.asObservable();
  }

  setInformationParticipante(participante:any){
    this.UserInformationParticipante$.next(participante);
  }
  getInformationParticipante(): Observable<any>{
    return this.UserInformationParticipante$.asObservable();
  }
}

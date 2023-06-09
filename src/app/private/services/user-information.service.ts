import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';

@Injectable()
export class UserInformationService {
  private UserInformation$:BehaviorSubject<UserI>=new BehaviorSubject({apellido:'',email:'',id:0,nombre:'',rol:'',telefono:''});
  constructor() { }
  setInformationUser(value: UserI): void {
    this.UserInformation$.next(value);
  }

  getData(): Observable<UserI> {
    return this.UserInformation$.asObservable();
  }
}

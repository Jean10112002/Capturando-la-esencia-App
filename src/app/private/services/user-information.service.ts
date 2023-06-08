import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private UserInformation$:BehaviorSubject<UserI>=new BehaviorSubject({apellido:'',email:'',id:0,nombre:'',rol:'',telefono:''});
  constructor() { }
  setData(value: UserI): void {
    this.UserInformation$.next(value);
  }

  getData(): Observable<UserI> {
    return this.UserInformation$ as Observable<UserI>;
  }
}

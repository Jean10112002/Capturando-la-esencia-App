import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginI } from '../interfaces/Login.interface';
import { LoginResponseI, UserProfileI } from '../interfaces/Login.response.interface';
import { Observable } from 'rxjs';
import { config } from 'src/config/config';

@Injectable()
export class AuthService {
  private readonly api = config.apiUrl;
  constructor(private readonly http:HttpClient) {}

  //metodos consumo de api
  loginJuradoAdmin(body: LoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>(`${this.api}login-jurado`, body);
  }
  loginParticipante(body: LoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>(`${this.api}login-participante`, body);
  }
  userInformation(): Observable<UserProfileI> {
    return this.http.get<UserProfileI>(this.api + 'user-profile');
  }
  logout() {
    return this.http.post(this.api + 'logout', {});
  }

  //metodos para los tokens
  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  loggedIn(): boolean {
    if (this.isTokenValid()) return true;
    return false;
  }
  private isTokenValid(): boolean {

    const token = localStorage.getItem('token');
    if(!token) return false;
    return true;
  }

  deleteToken() {
    return localStorage.removeItem('token');
  }

}

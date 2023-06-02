import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor() { }

  autenticarUsuario(username: string, password: string): boolean {
    // Aquí puedes implementar la lógica de autenticación
    // Verificar las credenciales del usuario, hacer una solicitud al backend, etc.
    // Si las credenciales son válidas, establecer `usuarioAutenticado` en `true`
    // y devolver `true`, de lo contrario, devolver `false`

    if (username === 'admin' && password === 'admin') {
      this.usuarioAutenticado = true;
      return true;
    } else {
      return false;
    }
  }

  usuarioEstaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}

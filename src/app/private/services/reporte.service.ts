import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  descargarExcel(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'blob' as 'json' // Establece el tipo de respuesta a 'blob'
    });

    this.http.get(`${this.apiUrl}exportarexcel`, { headers, responseType: 'blob' })
      .subscribe(response => {
        this.descargarArchivo(response);
      });
  }

  private descargarArchivo(data: any): void {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

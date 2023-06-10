import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CalificacionReporte } from 'src/app/private/interfaces/calificacion/calificacion.interface';
import { CalificacionService } from 'src/app/private/services/calificacion.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  ResponseResultados$!:Observable<CalificacionReporte>
  constructor(reportService:CalificacionService){
    this.ResponseResultados$=reportService.reporteCalificaciones();
  }
}

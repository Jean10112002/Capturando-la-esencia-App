import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'src/config/config';
import { Observable } from 'rxjs';
import { CalificacionReporte, Participante } from 'src/app/private/interfaces/calificacion/calificacion.interface';
import { CalificacionService } from 'src/app/private/services/calificacion.service';
import { UserI, UserProfileI } from 'src/app/public/interfaces/Login.response.interface';
import { AuthService } from 'src/app/public/services/auth.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  ResponseResultados$!:Observable<CalificacionReporte>

  user!: UserI | Participante;

  currentDateTime!:any
  startReporteAdmin=config.startReporte
  isInDateRangeReporteAdmin!: any;
  isInTimeRangeReporteAdmin!: any;
  shouldShowComponentReporteAdmin!: boolean;
  constructor(private readonly datePipe:DatePipe,private readonly router:Router, private readonly authService: AuthService,participanteServiceData:UserInformationService,reportService:CalificacionService){
    this.ResponseResultados$=reportService.reporteCalificaciones();

    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    );
    this.isInDateRangeReporteAdmin =
    this.currentDateTime >= this.startReporteAdmin
  this.isInTimeRangeReporteAdmin =
    this.currentDateTime.split(' ')[1] >= this.startReporteAdmin.split(' ')[1]
  this.shouldShowComponentReporteAdmin =
    this.isInDateRangeReporteAdmin && this.isInTimeRangeReporteAdmin;
    if(!this.shouldShowComponentReporteAdmin){
      this.router.navigate(['/home'])
    }

    authService.userInformation().subscribe((user: UserProfileI) => {
      this.user = user.user;
      if (this.user.rol === 'admin') {
        participanteServiceData.setInformationUser(user.user);
      }
      if (this.user.rol === 'jurado') {
        participanteServiceData.setInformationUser(user.user);
      }
      if (this.user.rol === 'participante') {
        participanteServiceData.setInformationParticipante(user.user);
      }
    });

}
}

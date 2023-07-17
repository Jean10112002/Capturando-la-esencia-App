import { Component, Input, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { AuthService } from 'src/app/public/services/auth.service';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { DatePipe } from '@angular/common';
import { config } from 'src/config/config';
import { CrearComponent } from '../crear/crear.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);
  notificacion = inject(ToastrService);
  router = inject(Router);
  dialog = inject(MatDialog);
  userInformation = inject(UserInformationService);
  currentDateTime!: any;
  //calificar
  startCalificar = config.startCalificar;
  endCalificar = config.endCalificar;
  isInDateRangeCalificar!: any;
  isInTimeRangeCalificar!: any;
  shouldShowComponentCalificar!: boolean;
  //photo participante
  startPhotoParticipante = config.startPhotoParticipante;
  endPhotoParticipante = config.endPhotoParticipante;
  isInDateRangePhotoParticipante!: any;
  isInTimeRangePhotoParticipante!: any;
  shouldShowComponentPhotoParticipante!: boolean;
  //admin reporte
  startReporteAdmin=config.startReporte
  isInDateRangeReporteAdmin!: any;
  isInTimeRangeReporteAdmin!: any;
  shouldShowComponentReporteAdmin!: boolean;

  constructor(private datePipe:DatePipe) {
    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    );
    //calfiicar
    this.isInDateRangeCalificar =
      this.currentDateTime >= this.startCalificar &&
      this.currentDateTime <= this.endCalificar;
    this.isInTimeRangeCalificar =
      this.currentDateTime.split(' ')[1] >= this.startCalificar.split(' ')[1] &&
      this.currentDateTime.split(' ')[1] <= this.endCalificar.split(' ')[1];
    this.shouldShowComponentCalificar =
      this.isInDateRangeCalificar && this.isInTimeRangeCalificar;
    //partiicpante
    this.isInDateRangePhotoParticipante =
      this.currentDateTime >= this.startPhotoParticipante &&
      this.currentDateTime <= this.endPhotoParticipante;
    this.isInTimeRangePhotoParticipante =
      this.currentDateTime.split(' ')[1] >= this.startPhotoParticipante.split(' ')[1] &&
      this.currentDateTime.split(' ')[1] <= this.endPhotoParticipante.split(' ')[1];
    this.shouldShowComponentPhotoParticipante =
      this.isInDateRangePhotoParticipante && this.isInTimeRangePhotoParticipante;
      //admin
    this.isInDateRangeReporteAdmin =
      this.currentDateTime >= this.startReporteAdmin
    this.isInTimeRangeReporteAdmin =
      this.currentDateTime.split(' ')[1] >= this.startReporteAdmin.split(' ')[1]
    this.shouldShowComponentReporteAdmin =
      this.isInDateRangeReporteAdmin && this.isInTimeRangeReporteAdmin;
  }
  ngOnInit() {}

  @Input() user!: UserI | Participante;

  showDialog = false;
   openDialog() {
    this.showDialog = true;
  }



  openDialogSearch(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(SearchUserComponent, {
      width: '50%',
      minWidth: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  closeDialog() {
    this.showDialog = false;
  }
  logout() {
    this.authService.logout().subscribe((res) => {
      this.authService.deleteToken();
      this.notificacion.success('Cierre de sesión exitoso', 'Proceso Exitoso');
      this.userInformation.clearSubject();

      this.router.navigate(['login']);
    });
  }

  abrirEnlaceVideo() {

    if(this.user?.rol === 'admin'){
      window.open('https://www.youtube.com/watch?v=syMX3JqEYTo', '_blank');
    }else if(this.user?.rol === 'jurado'){
      window.open('https://www.youtube.com/watch?v=fUz5NiqEpbw', '_blank');
    }else if(this.user?.rol === 'participante'){
      window.open('https://www.youtube.com/watch?v=Uda8N3KKoTE&t', '_blank');
    }
  }

}

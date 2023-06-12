import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ReporteService } from 'src/app/private/services/reporte.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';

=======
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/shared/services/spinner.service';
import { ParticipanteShowI } from 'src/app/private/interfaces/participante/participante.interface';
import { ParticipanteService } from 'src/app/private/services/participante.service';
>>>>>>> 556b9feac8c0f0e29ac2c01d2c9d6664eb096ce3
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
<<<<<<< HEAD
 /*  constructor(){
=======
  userInformation$!:Observable<ParticipanteShowI>;
  constructor(private route: ActivatedRoute,private readonly participanteService:ParticipanteService ){
>>>>>>> 556b9feac8c0f0e29ac2c01d2c9d6664eb096ce3

  } */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // 'id' es el nombre del parámetro en tu ruta
      this.userInformation$=this.participanteService.oneParticipante(id);
    });
  }
<<<<<<< HEAD
  gallery = [
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'50',comentario:'100' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'10',comentario:'10' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'20',comentario:'20' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'30',comentario:'30' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'40',comentario:'40' },
    { url: 'https://img2.wallspic.com/previews/4/9/5/2/5/152594/152594-lisa_simpson-los_simpsons-simpsons_telefono_caso-bart_simpson-homer_simpson-550x310.jpg', alt: 'Liza Cool' ,like:'10',comentario:'50' },

    // Agrega más imágenes aquí
  ];
  constructor(private reporte: ReporteService) {}



=======
>>>>>>> 556b9feac8c0f0e29ac2c01d2c9d6664eb096ce3
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/core/shared/services/spinner.service';
import { ParticipanteShowI } from 'src/app/private/interfaces/participante/participante.interface';
import { ParticipanteService } from 'src/app/private/services/participante.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInformation$!:Observable<ParticipanteShowI>;
  constructor(private route: ActivatedRoute,private readonly participanteService:ParticipanteService ){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // 'id' es el nombre del parámetro en tu ruta
      this.userInformation$=this.participanteService.oneParticipante(id);
    });
  }
}

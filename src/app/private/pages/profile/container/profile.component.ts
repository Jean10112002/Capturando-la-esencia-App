import { Component, OnDestroy, OnInit } from '@angular/core';

import { ReporteService } from 'src/app/private/services/reporte.service';
import { UserInformationService } from 'src/app/private/services/user-information.service';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SpinnerService } from 'src/app/core/shared/services/spinner.service';
import { ParticipanteShowI } from 'src/app/private/interfaces/participante/participante.interface';
import { ParticipanteService } from 'src/app/private/services/participante.service';
import { EnventEmissorService } from 'src/app/private/services/envent-emissor.service';
import { eventEmissorI } from 'src/app/private/interfaces/event-emissor/event-emissor.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit,OnDestroy {
  userInformation$!: Observable<ParticipanteShowI>;
  id!:number
  participante!:any
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private readonly participanteService: ParticipanteService,
      participanteServiceData:UserInformationService,
    private readonly router:Router,
    eventEmissorService:EnventEmissorService
  ) {
    participanteServiceData.getInformationParticipante().pipe(takeUntil(this.destroy$)).subscribe((participante) => {
      const rol=participante.rol;
      participanteServiceData.getData().pipe(takeUntil(this.destroy$)).subscribe(data=>{
        if(data.rol==''&&rol==''){
          this.router.navigate(['/home']);
        }
      })
    });
    eventEmissorService.getEvent().pipe(takeUntil(this.destroy$)).subscribe((event:eventEmissorI)=>{
      if(event.event=='POST_ELIMINADO'){
        this.userInformation$ = this.participanteService.oneParticipante(this.id);
      }
    })
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // 'id' es el nombre del parámetro en tu ruta
      this.userInformation$ = this.participanteService.oneParticipante(this.id);
    });
  }
}

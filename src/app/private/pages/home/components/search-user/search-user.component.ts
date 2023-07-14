import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ParticipanteService } from 'src/app/private/services/participante.service';
import { Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { ParticipanteSearchCedulaI } from 'src/app/private/interfaces/participante/participante.interface';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { Route, Router } from '@angular/router';
import { SpinnerService } from 'src/app/core/shared/services/spinner.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit{
  term!:string;
  participantes$:Observable<Participante[]>;
  constructor(public dialogRef: MatDialogRef<NavbarComponent>,private readonly participanteService:ParticipanteService,private readonly route:Router){
   this.participantes$=this.participanteService.allParticipantes().pipe(map(res=>res.Participantes))
  }
  ngOnInit(): void {

  }
  goToProfile(id:number){
    this.dialogRef.close();
    this.route.navigate(['/profile',id])
  }


}

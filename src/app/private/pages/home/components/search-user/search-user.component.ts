import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ParticipanteService } from 'src/app/private/services/participante.service';
import { Observable, Subject, catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';
import { ParticipanteSearchCedulaI } from 'src/app/private/interfaces/participante/participante.interface';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  searchTerm$:Subject<string>=new Subject();
  participantes$!:Observable<Participante[]>;
  constructor(public dialogRef: MatDialogRef<NavbarComponent>,private readonly participanteService:ParticipanteService,private readonly route:Router){
    this.participantes$=this.searchTerm$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term: string) => term.trim().length > 0),
      switchMap((term: string) => this.participanteService.oneParticipanteSearchByCedula(term)),
      map((p:ParticipanteSearchCedulaI)=>p.participante),
      tap(respuesta=>console.log(respuesta))
      /* catchError(()=>this.participantes$=of() */
      )
  }
  goToProfile(id:number){
    this.dialogRef.close();
    this.route.navigate(['/profile',id])
  }
  onSearch(term:string){
     if(term.trim()===''){
      console.log("vacio")
 /*      this.participantes$=of(); */
    }else{
    console.log("metodo")

      this.searchTerm$.next(term);
    }
  }
}

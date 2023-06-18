import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {eventEmissorI} from '../interfaces/event-emissor/event-emissor.interface'
@Injectable()
export class EnventEmissorService {
  private event:Subject<eventEmissorI>=new Subject<eventEmissorI>();
  getEvent():Observable<eventEmissorI>{
    return this.event.asObservable()
  }
  setEvent(event:eventEmissorI):void{
    this.event.next(event);
  }
  constructor() { }
}

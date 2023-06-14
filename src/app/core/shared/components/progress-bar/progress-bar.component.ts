import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements AfterViewInit{
    isLoading$:Subject<boolean>=new Subject();
    constructor(private spinnerService:SpinnerService){
    }
    ngAfterViewInit(): void {
    this.isLoading$=this.spinnerService.isLoading$;

  }

}

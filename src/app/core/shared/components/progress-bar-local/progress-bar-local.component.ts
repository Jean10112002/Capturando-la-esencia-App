import { Component,inject } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-progress-bar-local',
  templateUrl: './progress-bar-local.component.html',
  styleUrls: ['./progress-bar-local.component.scss']
})
export class ProgressBarLocalComponent {
  spinnerService=inject(SpinnerService)
  isLoading$=this.spinnerService.isLoading$;

}

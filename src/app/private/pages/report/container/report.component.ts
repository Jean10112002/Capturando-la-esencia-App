import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'src/config/config';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  currentDateTime!:any
  startReporteAdmin=config.startReporte
  isInDateRangeReporteAdmin!: any;
  isInTimeRangeReporteAdmin!: any;
  shouldShowComponentReporteAdmin!: boolean;
  constructor(private readonly datePipe:DatePipe,private readonly router:Router){
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
  }
}

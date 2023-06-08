import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/private/services/user-information.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userDataService: UserInformationService){

  }
  ngOnInit(): void {
    this.userDataService.getData().subscribe((data)=>{
      console.log(data)
    })
  }

}

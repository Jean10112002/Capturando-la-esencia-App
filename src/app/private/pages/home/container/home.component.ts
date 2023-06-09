import { Component, OnInit } from '@angular/core';

//Importaciones para abrir el Cuadro de Dialogo de Crear
import { MatDialog } from '@angular/material/dialog';
import { CrearComponent } from '../components/crear/crear.component';
import { UserInformationService } from 'src/app/private/services/user-information.service';
import { AuthService } from 'src/app/public/services/auth.service';
import { LoginResponseI, UserI, UserProfileI } from 'src/app/public/interfaces/Login.response.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  constructor(private dialog: MatDialog, private dataServiceUser:UserInformationService, private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.userInformation().subscribe((data:UserProfileI)=>{
      this.dataServiceUser.setInformationUser(data.user);
    });
  }

  //Funcion para abrir el Crear.Component.html como Cuadro de dialogo
  openDialog(): void {
    const dialogRef = this.dialog.open(CrearComponent, {
      width: '400px',
      // Otras opciones de configuración del modal
    });

    //Obtener datos del Cuadro del Dialogo de crear
    dialogRef.afterClosed().subscribe(result => {
      // Realiza alguna acción después de cerrar el cuadro de diálogo si es necesario
      console.log('Resultado del cuadro de diálogo:', result);
    });
  }
}

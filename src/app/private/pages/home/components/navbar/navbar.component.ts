import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  authService=inject(AuthService);
   notificacion=inject(ToastrService);
   router=inject(Router);
  @Input() user!:UserI|Participante;
  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
  logout(){
    this.authService.logout().subscribe((res)=>{
      this.authService.deleteToken();
      this.notificacion.success("Cierre de sesión exitoso",'Proceso Exitoso');
      this.router.navigate(['login']);
    });
  }

}

import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Participante } from 'src/app/private/interfaces/post/post.interface';
import { UserI } from 'src/app/public/interfaces/Login.response.interface';
import { AuthService } from 'src/app/public/services/auth.service';
import { SearchUserComponent } from '../search-user/search-user.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  authService=inject(AuthService);
   notificacion=inject(ToastrService);
   router=inject(Router);
    dialog=inject(MatDialog)
  @Input() user!:UserI|Participante;
  showDialog = false;

  openDialog() {
    this.showDialog = true;
  }
  openDialogSearch(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SearchUserComponent, {
      width: '100%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
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

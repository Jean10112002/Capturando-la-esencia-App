import { LoginI } from './../../../interfaces/Login.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router:Router,
    private notificacion:ToastrService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(form: LoginI) {
    if (this.myForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.myForm.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {
      this.authService.loginParticipante(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.router.navigate(['home']);
      });
    }
  }
  onSubmitJurado(form: LoginI) {
    if (this.myForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.myForm.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {
      this.authService.loginJuradoAdmin(form).subscribe((data) => {
        this.authService.setToken(data.access_token);
        this.notificacion.success("Inicio de sesión exitoso",'Proceso Exitoso');
        this.router.navigate(['home']);
      });
    }
  }
}

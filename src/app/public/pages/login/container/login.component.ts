import { LoginI } from './../../../interfaces/Login.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/public/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private aut:AuthService){}

  ngOnInit() {
    this.buildForm();
  }

buildForm() {
  this.myForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

onSubmit(form: LoginI) {
  if (this.myForm.invalid) {
    // Marcar los campos del formulario como tocados para mostrar los mensajes de error
    Object.values(this.myForm.controls).forEach(control => control.markAsTouched());
      return;

  } else {
    // El formulario es inválido, muestra los errores o realiza alguna acción
    console.log();
  this.aut.loginParticipante(form).subscribe((data)=>{
    console.log(data);
  },(e)=>{console.log(e);});
  this.aut.loginJuradoAdmin(form).subscribe((data)=>{
    console.log(data);
  },(e)=>{console.log(e);});

  }
}
}

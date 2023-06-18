import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calificar-post',
  templateUrl: './calificar-post.component.html',
  styleUrls: ['./calificar-post.component.scss'],
})
export class CalificarPostComponent {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      contenido: ['', [Validators.required]],
      organizacion: ['', Validators.required],
      creatividad: ['', [Validators.required]],
      tecnica: ['', Validators.required],
    });
  }
  onSubmit(form:any) {
    if (this.myForm.invalid) {
      // Marcar los campos del formulario como tocados para mostrar los mensajes de error
      Object.values(this.myForm.controls).forEach((control) =>
        control.markAsTouched()
      );
      return;
    } else {

      };
    }
  }

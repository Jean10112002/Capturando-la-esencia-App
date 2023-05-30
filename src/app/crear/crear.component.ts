import { Component } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],


})
export class CrearComponent {

  //Validacion de los pasos para crear la fotos
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<CrearComponent>) {}


  // Método para cerrar el cuadro de diálogo y pasar datos al componente padre
  closeDialog(data: any): void {
    this.dialogRef.close(data);
  }
}

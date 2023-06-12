import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/materialComponents/Material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports:[
    SharedModule
  ]
})
export class CoreModule { }

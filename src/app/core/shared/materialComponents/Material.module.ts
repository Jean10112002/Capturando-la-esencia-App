import { NgModule } from '@angular/core';
//Angular Material
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator'


@NgModule({
  imports: [MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule ,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatStepperModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule
    ],
  exports: [MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTabsModule,
    MatBadgeModule,MatTableModule,MatPaginatorModule],
  declarations: [],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
})
export class MaterialModule { }

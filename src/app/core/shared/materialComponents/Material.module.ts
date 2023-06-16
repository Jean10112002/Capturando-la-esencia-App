import { NgModule } from '@angular/core';
//Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import { MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';




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
    MatProgressBarModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatMenuModule
    ],
  exports: [MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,MatCardModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  declarations: [],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
})
export class MaterialModule { }

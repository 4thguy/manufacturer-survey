import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
  declarations: []
})
export class MaterialComponentsModule { }

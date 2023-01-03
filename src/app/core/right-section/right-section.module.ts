import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSectionComponent } from './right-section.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [RightSectionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    RightSectionComponent
  ]
})
export class RightSectionModule { }

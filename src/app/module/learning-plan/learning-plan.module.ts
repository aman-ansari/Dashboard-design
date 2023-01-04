import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LearningPlanComponent } from './learning-plan.component';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: LearningPlanComponent
  }
]

@NgModule({
  declarations: [LearningPlanComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    LearningPlanComponent
  ]
})
export class LearningPlanModule { }

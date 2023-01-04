import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { MaterialModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent
  }
]

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    ResourcesComponent
  ]
})
export class ResourcesModule { }

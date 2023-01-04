import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [AsideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    [RouterModule.forChild(routes)],
  ],
  exports:[
    AsideNavComponent
  ]
})
export class AsideNavModule { }

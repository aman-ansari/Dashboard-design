import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavComponent } from './aside-nav.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [AsideNavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    AsideNavComponent
  ]
})
export class AsideNavModule { }

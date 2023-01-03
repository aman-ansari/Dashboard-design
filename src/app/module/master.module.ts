import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { MasterRoutingModule } from './master-routing.module';
import { AsideNavModule } from '../core/aside-nav/aside-nav.module';
import { MasterLayoutComponent } from '../core/master-layout/master-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RightSectionModule } from '../core/right-section/right-section.module';



@NgModule({
  declarations: [MasterLayoutComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AsideNavModule,
    RightSectionModule,
    DashboardModule,
    MaterialModule
  ]
})
export class MasterModule { }

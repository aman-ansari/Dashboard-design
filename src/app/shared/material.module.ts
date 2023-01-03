import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatProgressBarModule,
    NgbProgressbarModule
  ],
  exports:[
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatProgressBarModule,
    NgbProgressbarModule
  ]
})
export class MaterialModule { }

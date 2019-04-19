import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardAuthResolver } from "./DashboardAuthResolver";
import { SharedModule } from '../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ScanPreviewComponent } from './scan-preview/scan-preview.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    ScanPreviewComponent
  ],
  providers: [
    DashboardAuthResolver
  ]
})
export class DashboardModule {}

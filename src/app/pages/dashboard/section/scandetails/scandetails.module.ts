import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScandetailsComponent } from './scandetails.component';
import { ScandetailsAuthResolver } from './scandetails-auth-resolver.service';
import { SharedModule } from '../shared';
import { ScandetailsRoutingModule } from './scandetails-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ScandetailsRoutingModule
  ],
  declarations: [
    ScandetailsComponent
  ],
  providers: [
    ScandetailsAuthResolver
  ]
})
export class ScandetailsModule {}

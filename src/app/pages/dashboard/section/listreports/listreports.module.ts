import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListreportsComponent } from './listreports.component';
import { ListreportsAuthResolver } from './listreports-auth-resolver.service';
import { SharedModule } from '../shared';
import { ListreportsRoutingModule } from './listreports-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ListreportsRoutingModule
  ],
  declarations: [
    ListreportsComponent
  ],
  providers: [
    ListreportsAuthResolver
  ]
})
export class ListreportsModule {}

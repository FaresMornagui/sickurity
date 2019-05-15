import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServersideComponent } from './serverside.component';
import { ServersideAuthResolver } from './serverside-auth-resolver.service';
import { SharedModule } from '../shared';
import { ServersideRoutingModule } from './serverside-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ServersideRoutingModule
  ],
  declarations: [
    ServersideComponent
  ],
  providers: [
    ServersideAuthResolver
  ]
})
export class ServersideModule {}

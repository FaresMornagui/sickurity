import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListscansComponent } from './listscans.component';
import { ListscansAuthResolver } from './listscans-auth-resolver.service';
import { SharedModule } from '../shared';
import { ListscansRoutingModule } from './listscans-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ListscansRoutingModule
  ],
  declarations: [
    ListscansComponent
  ],
  providers: [
    ListscansAuthResolver
  ]
})
export class ListscansModule {}

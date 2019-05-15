import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { FeaturesAuthResolver } from './features-auth-resolver.service';
import { SharedModule } from '../shared';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FeaturesRoutingModule
  ],
  declarations: [
    FeaturesComponent
  ],
  providers: [
    FeaturesAuthResolver
  ]
})
export class FeaturesModule {}

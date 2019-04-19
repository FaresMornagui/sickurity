import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus.component';
import { AboutusAuthResolver } from './aboutus-auth-resolver.service';
import { SharedModule } from '../shared';
import { AboutusRoutingModule } from './aboutus-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AboutusRoutingModule
  ],
  declarations: [
    AboutusComponent
  ],
  providers: [
    AboutusAuthResolver
  ]
})
export class AboutusModule {}

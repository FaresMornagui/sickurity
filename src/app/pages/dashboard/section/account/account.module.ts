import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountAuthResolver } from './account-auth-resolver.service';
import { SharedModule } from '../shared';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent
  ],
  providers: [
    AccountAuthResolver
  ]
})
export class AccountModule {}

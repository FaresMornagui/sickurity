import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountAuthResolver } from './account-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    resolve: {
      isAuthenticated: AccountAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}

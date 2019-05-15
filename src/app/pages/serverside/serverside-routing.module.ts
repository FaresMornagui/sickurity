import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersideComponent } from './serverside.component';
import { ServersideAuthResolver } from './serverside-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ServersideComponent,
    resolve: {
      isAuthenticated: ServersideAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersideRoutingModule {}

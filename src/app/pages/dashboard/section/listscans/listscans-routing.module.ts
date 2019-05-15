import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListscansComponent } from './listscans.component';
import { ListscansAuthResolver } from './listscans-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListscansComponent,
    resolve: {
      isAuthenticated: ListscansAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListscansRoutingModule {}

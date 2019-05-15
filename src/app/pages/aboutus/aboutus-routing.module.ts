import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { AboutusAuthResolver } from './aboutus-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AboutusComponent,
    resolve: {
      isAuthenticated: AboutusAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule {}

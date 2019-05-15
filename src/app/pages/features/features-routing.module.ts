import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { FeaturesAuthResolver } from './features-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    resolve: {
      isAuthenticated: FeaturesAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}

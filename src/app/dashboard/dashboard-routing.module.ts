import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardAuthResolver } from "./DashboardAuthResolver";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      isAuthenticated: DashboardAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

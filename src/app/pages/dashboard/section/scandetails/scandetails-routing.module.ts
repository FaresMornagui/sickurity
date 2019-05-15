import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScandetailsComponent } from './scandetails.component';
import { ScandetailsAuthResolver } from './scandetails-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ScandetailsComponent,
    resolve: {
      isAuthenticated: ScandetailsAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScandetailsRoutingModule {}

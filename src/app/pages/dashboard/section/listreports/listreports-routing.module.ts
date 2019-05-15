import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListreportsComponent } from './listreports.component';
import { ListreportsAuthResolver } from './listreports-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListreportsComponent,
    resolve: {
      isAuthenticated: ListreportsAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListreportsRoutingModule {}















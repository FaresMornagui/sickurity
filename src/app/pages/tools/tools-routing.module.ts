import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { ToolsAuthResolver } from './tools-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    resolve: {
      isAuthenticated: ToolsAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule {}

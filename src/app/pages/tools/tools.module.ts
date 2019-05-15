import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolsComponent } from './tools.component';
import { ToolsAuthResolver } from './tools-auth-resolver.service';
import { SharedModule } from '../shared';
import { ToolsRoutingModule } from './tools-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ToolsRoutingModule
  ],
  declarations: [
    ToolsComponent
  ],
  providers: [
    ToolsAuthResolver
  ]
})
export class ToolsModule {}

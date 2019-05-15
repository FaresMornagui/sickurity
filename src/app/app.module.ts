import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './pages/shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './pages/core/core.module';
import { AboutusModule } from './pages/aboutus/aboutus.module';
import { BlogModule } from './pages/blog/blog.module';
import { FeaturesModule } from './pages/features/features.module';
import { ToolsModule } from './pages/tools/tools.module';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { TreeviewModule } from 'ngx-treeview';
import { ListreportsModule } from './pages/dashboard/section/listreports/listreports.module';
import { ListscansModule } from './pages/dashboard/section/listscans/listscans.module';
import { ScandetailsModule } from './pages/dashboard/section/scandetails/scandetails.module';
import { AccountModule } from './pages/dashboard/section/account/account.module';



@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    FeaturesModule,
    AboutusModule,
    DashboardModule,
    ListreportsModule,
    ListscansModule,
    ScandetailsModule,
    AccountModule,
    BlogModule,
    AuthModule,
    ToolsModule,
    TreeviewModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

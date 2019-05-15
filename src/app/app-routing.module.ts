import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule'
  },
  {
    path: 'tools',
    loadChildren: './pages/tools/tools.module#ToolsModule'
  },

  {
    path: 'features',
    loadChildren: './pages/features/features.module#FeaturesModule'
  },

  {
    path: 'aboutus',
    loadChildren: './pages/aboutus/aboutus.module#AboutusModule'
  },
  {
    path: 'serverside',
    loadChildren: './pages/serverside/serverside.module#ServersideModule'
  },
  {
    path: 'blog',
    loadChildren: './pages/blog/blog.module#BlogModule'
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

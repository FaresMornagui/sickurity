import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule'
  },
  {
    path: 'tools',
    loadChildren: './tools/tools.module#ToolsModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'features',
    loadChildren: './features/features.module#FeaturesModule'
  },
  {
    path: 'aboutus',
    loadChildren: './aboutus/aboutus.module#AboutusModule'
  },
  {
    path: 'serverside',
    loadChildren: './serverside/serverside.module#ServersideModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },

  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  }
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

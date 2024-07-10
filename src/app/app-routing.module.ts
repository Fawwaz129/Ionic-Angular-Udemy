import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule),
      },
      {
        path: ':recipeId',
        loadChildren: () => import('./pages/recipes/recipes-detail/recipes-detail.module').then( m => m.RecipesDetailPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

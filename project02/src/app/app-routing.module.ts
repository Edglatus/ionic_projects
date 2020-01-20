import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'produtos',
    redirectTo: 'tabs/produtos'
  },
  {
    path: 'form-produtos',
    redirectTo: 'tabs/edit-produtos'
  },
  {
    path: 'form-produtos/:id',
    redirectTo: 'tabs/edit-produtos/:id'
  },
  {
    path: 'categorias',
    redirectTo: 'tabs/categorias'
  },
  {
    path: 'form-categorias',
    redirectTo: 'tabs/edit-categorias'
  },
  {
    path: 'form-categorias/:id',
    redirectTo: 'tabs/edit-categorias/:id'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

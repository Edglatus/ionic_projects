import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/produtos/produtos.module').then(m => m.ProdutosPageModule)
          }
        ]
      },
      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/produtos/produtos.module').then(m => m.ProdutosPageModule)
          }
        ]
      },
      {
        path: 'edit-produtos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/form-produtos/form-produtos.module').then( m => m.FormProdutosPageModule)
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../pages/form-produtos/form-produtos.module').then( m => m.FormProdutosPageModule)
          }
        ]
      },
      {
        path: 'categorias',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
          }
        ]
      },
      {
        path: 'edit-categorias',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/form-categorias/form-categorias.module').then( m => m.FormCategoriasPageModule)
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../pages/form-categorias/form-categorias.module').then( m => m.FormCategoriasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

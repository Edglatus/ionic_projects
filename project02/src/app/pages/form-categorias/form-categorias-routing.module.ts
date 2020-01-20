import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCategoriasPage } from './form-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: FormCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCategoriasPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCategoriasPageRoutingModule } from './form-categorias-routing.module';

import { FormCategoriasPage } from './form-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCategoriasPageRoutingModule
  ],
  declarations: [FormCategoriasPage]
})
export class FormCategoriasPageModule {}

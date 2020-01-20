import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Categoria } from '../../models/categorias';
import { FormCategoriasPage } from '../form-categorias/form-categorias.page';
import { ApiCategoriasService } from '../../services/api-categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias: any;
  categoria: Categoria;

  constructor(private router: Router, private api: ApiCategoriasService, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    const loading = await this.loadingController.create( {
      message: 'Apagando'
    });

    await loading.present();

    await this.api.getAll()
      .subscribe(res => {
        this.categorias = res;
        loading.dismiss();
      }, err => {
        console.log(err);
      });
  }

  addCategoria() {
    this.router.navigate(['/form-categorias', 0]);
  }

  editCategoria(id: number) {
    this.router.navigate(['/form-categorias', id]);
  }

  async removeCategoria(id: number) {
    const loading = await this.loadingController.create( {
      message: 'Carregando'
    });

    await loading.present();

    await this.api.delete(id)
      .subscribe(res => {
        console.log(res);
        this.getAll();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

    this.getAll();
  }
}

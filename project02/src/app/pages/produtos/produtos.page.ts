import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Produto } from '../../models/produtos';
import { FormProdutosPage } from '../form-produtos/form-produtos.page';
import { ApiProdutosService } from '../../services/api-produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  produtos: any;
  produto: Produto;

  constructor(private router: Router, private api: ApiProdutosService, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    const loading = await this.loadingController.create( {
      message: 'Carregando'
    });

    await loading.present();

    await this.api.getAll()
      .subscribe(res => {
        this.produtos = res;
        loading.dismiss();
      }, err => {
        console.log(err);
      });
  }

  addProduto() {
    this.router.navigate(['/form-produtos', 0]);
  }

  editProduto(id: number) {
    this.router.navigate(['/form-produtos', id]);
  }

  async removeProduto(id: number) {
    const loading = await this.loadingController.create( {
      message: 'Apagando'
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

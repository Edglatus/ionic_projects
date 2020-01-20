import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Produto } from '../../models/produtos';
import { ApiProdutosService } from '../../services/api-produtos.service';

import { Categoria } from '../../models/categorias';
import { ApiCategoriasService } from '../../services/api-categorias.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.page.html',
  styleUrls: ['./form-produtos.page.scss'],
})
export class FormProdutosPage implements OnInit {
  produto: Produto;
  categorias: any;

  constructor(private actRoute: ActivatedRoute, private router: Router, private cApi: ApiCategoriasService,
              private api: ApiProdutosService, private lc: LoadingController) {
    this.produto = new Produto();
  }

  ngOnInit() {
    this.categorias = this.cApi.getAll();

    this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id == 0) {
        this.produto.id = 0;
        this.produto.nome = 'Novo';
        this.produto.qtde = 0;
      } else {
        this.getById(id);
      }
    });
  }

  async save() {
    if (this.produto.id === 0 || this.produto.id == null) {
      await this.api.create(this.produto)
        .subscribe(res => {
          this.router.navigateByUrl('/produtos');
        }, (err) => {
          console.log(err);
        });
    } else {
      await this.api.update(this.produto.id, this.produto)
        .subscribe(res => {
          this.router.navigateByUrl('/produtos');
        }, (err) => {
          console.log(err);
        });
    }
  }

  async getById(id: number) {
    const loading = await this.lc.create( {
      message: 'Loading'
    });

    await loading.present();
    await this.api.getOneByID(id)
      .subscribe(res => {
        console.log(res);
        this.produto = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}

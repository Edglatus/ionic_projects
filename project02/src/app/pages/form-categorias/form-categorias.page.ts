import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { Categoria } from '../../models/categorias';
import { ApiCategoriasService } from '../../services/api-categorias.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.page.html',
  styleUrls: ['./form-categorias.page.scss'],
})
export class FormCategoriasPage implements OnInit {
  categoria: Categoria;

  constructor(private actRoute: ActivatedRoute, private router: Router, private api: ApiCategoriasService, private lc: LoadingController) {
    this.categoria = new Categoria();
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const id: number = params.id;

      if (id == 0) {
        this.categoria.id = 0;
        this.categoria.nome = 'Nova';
      } else {
        this.getById(id);
      }
    });
  }

  async save() {
    if (this.categoria.id === 0 || this.categoria.id == null) {
      await this.api.create(this.categoria)
        .subscribe ( res => {
          this.router.navigateByUrl('/categorias');
        }, err => {
          console.log(err);
        });
    } else {
      await this.api.update(this.categoria.id, this.categoria)
        .subscribe ( res => {
          this.router.navigateByUrl('/categorias');
        }, err => {
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
        this.categoria = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}

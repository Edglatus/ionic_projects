import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.page.html',
  styleUrls: ['./triangle.page.scss'],
})
export class TrianglePage implements OnInit {
  public height:number = 0;
  public base:number = 0;
  public area:number = 0;

  constructor() {}

  ngOnInit() {
  }

  async getArea(){
    this.area = this.base * this.height / 2;
    alert('A triangle of base ' + this.base + ' and height ' + this.height + ' has an area of ' + this.area);

    this.height = 0;
    this.base = 0;
    this.area = 0;
  }
}

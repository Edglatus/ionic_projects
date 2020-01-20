import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public name = "";
  public grade = 0;

  public students: Array<Student> = [];

  constructor() { }

  ngOnInit() {
  }

  async saveNew(){
    this.students.push(new Student(this.name, this.grade));

    this.name = "";
    this.grade = 0;
  }
}

class Student {
  public name: string;
  public grade: number;

  constructor (name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

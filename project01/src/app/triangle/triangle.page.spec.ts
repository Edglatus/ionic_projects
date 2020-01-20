import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrianglePage } from './triangle.page';

describe('TrianglePage', () => {
  let component: TrianglePage;
  let fixture: ComponentFixture<TrianglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrianglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

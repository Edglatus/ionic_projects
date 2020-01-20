import { TestBed } from '@angular/core/testing';

import { ApiCategoriasService } from './api-categorias.service';

describe('ApiCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCategoriasService = TestBed.get(ApiCategoriasService);
    expect(service).toBeTruthy();
  });
});

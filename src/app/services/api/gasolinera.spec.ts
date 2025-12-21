import { TestBed } from '@angular/core/testing';

import { Gasolinera } from './gasolinera';

describe('Gasolinera', () => {
  let service: Gasolinera;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gasolinera);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

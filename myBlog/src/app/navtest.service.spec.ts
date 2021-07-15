import { TestBed } from '@angular/core/testing';

import { NavtestService } from './navtest.service';

describe('NavtestService', () => {
  let service: NavtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

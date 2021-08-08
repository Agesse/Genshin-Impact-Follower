import { TestBed } from '@angular/core/testing';

import { BattlepassService } from './battlepass.service';

describe('BattlepassService', () => {
  let service: BattlepassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlepassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

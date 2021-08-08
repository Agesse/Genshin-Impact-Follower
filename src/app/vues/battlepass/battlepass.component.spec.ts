import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlepassVueComponent } from './battlepass.component';

describe('BattlepassVueomponent', () => {
  let component: BattlepassVueComponent;
  let fixture: ComponentFixture<BattlepassVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BattlepassVueComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlepassVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

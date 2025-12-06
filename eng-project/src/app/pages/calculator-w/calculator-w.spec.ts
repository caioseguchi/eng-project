import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorW } from './calculator-w';

describe('CalculatorW', () => {
  let component: CalculatorW;
  let fixture: ComponentFixture<CalculatorW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorW]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorW);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

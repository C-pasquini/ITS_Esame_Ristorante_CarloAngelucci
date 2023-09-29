import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteInserisciComponent } from './ristorante-inserisci.component';

describe('RistoranteInserisciComponent', () => {
  let component: RistoranteInserisciComponent;
  let fixture: ComponentFixture<RistoranteInserisciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteInserisciComponent]
    });
    fixture = TestBed.createComponent(RistoranteInserisciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

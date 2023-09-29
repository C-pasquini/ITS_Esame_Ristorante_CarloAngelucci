import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteDettaglioComponent } from './ristorante-dettaglio.component';

describe('RistoranteDettaglioComponent', () => {
  let component: RistoranteDettaglioComponent;
  let fixture: ComponentFixture<RistoranteDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteDettaglioComponent]
    });
    fixture = TestBed.createComponent(RistoranteDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

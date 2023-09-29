import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RistoranteListaComponent } from './ristorante-lista.component';

describe('RistoranteListaComponent', () => {
  let component: RistoranteListaComponent;
  let fixture: ComponentFixture<RistoranteListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RistoranteListaComponent]
    });
    fixture = TestBed.createComponent(RistoranteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

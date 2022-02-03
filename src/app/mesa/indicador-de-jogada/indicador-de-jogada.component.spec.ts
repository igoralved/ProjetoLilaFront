import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorDeJogadaComponent } from './indicador-de-jogada.component';

describe('IndicadorDeJogadaComponent', () => {
  let component: IndicadorDeJogadaComponent;
  let fixture: ComponentFixture<IndicadorDeJogadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorDeJogadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorDeJogadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

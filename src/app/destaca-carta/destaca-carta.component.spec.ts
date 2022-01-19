import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacaCartaComponent } from './destaca-carta.component';

describe('DestacaCartaComponent', () => {
  let component: DestacaCartaComponent;
  let fixture: ComponentFixture<DestacaCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestacaCartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestacaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

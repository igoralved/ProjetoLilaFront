import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPasswordComponent } from './screen-password.component';

describe('ScreenPasswordComponent', () => {
  let component: ScreenPasswordComponent;
  let fixture: ComponentFixture<ScreenPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

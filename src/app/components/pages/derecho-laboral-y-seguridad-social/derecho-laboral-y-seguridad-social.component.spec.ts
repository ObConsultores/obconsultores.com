import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoLaboralYSeguridadSocialComponent } from './derecho-laboral-y-seguridad-social.component';

describe('DerechoLaboralYSeguridadSocialComponent', () => {
  let component: DerechoLaboralYSeguridadSocialComponent;
  let fixture: ComponentFixture<DerechoLaboralYSeguridadSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoLaboralYSeguridadSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoLaboralYSeguridadSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

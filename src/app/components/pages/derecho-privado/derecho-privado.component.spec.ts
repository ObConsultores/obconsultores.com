import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoPrivadoComponent } from './derecho-privado.component';

describe('DerechoPrivadoComponent', () => {
  let component: DerechoPrivadoComponent;
  let fixture: ComponentFixture<DerechoPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoPrivadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

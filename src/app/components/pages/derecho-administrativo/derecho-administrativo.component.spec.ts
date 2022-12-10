import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoAdministrativoComponent } from './derecho-administrativo.component';

describe('DerechoAdministrativoComponent', () => {
  let component: DerechoAdministrativoComponent;
  let fixture: ComponentFixture<DerechoAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoAdministrativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

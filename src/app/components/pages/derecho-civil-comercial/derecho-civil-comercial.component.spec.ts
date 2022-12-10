import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoCivilComercialComponent } from './derecho-civil-comercial.component';

describe('DerechoCivilComercialComponent', () => {
  let component: DerechoCivilComercialComponent;
  let fixture: ComponentFixture<DerechoCivilComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoCivilComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoCivilComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
